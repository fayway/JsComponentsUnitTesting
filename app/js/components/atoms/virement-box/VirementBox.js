import Ractive from 'ractive';
const Template = require('raw!./virement-box.html');

export default Ractive.extend({
    template: Template,
    data: {
        montantVirement: undefined,
        isValidVirementMontant: false,
        isVirementConfirmed: false,
        waitingVirement: false
    },
    oninit: function () {
        this.observe('montantVirement', function (newMontant) {
            var isValidVirementMontant = false;
            //
            if (newMontant && newMontant.match(/^[0-9]+$/) && parseInt(newMontant) <= this.get('balance')) {
                isValidVirementMontant = true;
            }
            this.set('isValidVirementMontant', isValidVirementMontant);
            //
            if (newMontant && !isValidVirementMontant) {
                var checkbox = this.el.querySelector('.app-confirm-virement');
                if (checkbox && checkbox.MaterialCheckbox) {
                    checkbox.MaterialCheckbox.uncheck();
                    this.set('isVirementConfirmed', false);
                }
            }
        }.bind(this));
    },
    toggleVirementConfirmed: function (event) {
        this.set('isVirementConfirmed', event.node.checked);
    },
    fireVirement: function (event) {
        var montantVirement = this.get('montantVirement');
        if (!montantVirement) {
            montantVirement = this.getNodeMontantVirementValue();
        }
        this.fire('virementOrder', this.get('salarieId'), parseFloat(montantVirement), this.showProgress.bind(this), this.clear.bind(this));
    },
    showProgress: function () {
        this.set('waitingVirement', true);
    },
    clear: function () {
        this.set('montantVirement', undefined);
        this.set('isVirementConfirmed', false);
        var checkbox = this.el.querySelector('.app-confirm-virement');
        if (checkbox && checkbox.MaterialCheckbox) {
            checkbox.MaterialCheckbox.uncheck();
        }
        this.set('waitingVirement', false);
    },
    getNodeMontantVirementValue: function () {
        return this.el.querySelector('.app-montant input').value;
    }
});