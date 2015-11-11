import Ractive from 'ractive';
import SalarieCard from '../organisms/salarie-card/SalarieCard';
import SalarieService from '../../services/SalarieService';
import VirementService from '../../services/VirementService';

export default Ractive.extend({
    template: `
        <main class="mdl-layout__content mdl-color--grey-100">
            <div class="app-virement-boxes mdl-color--white  mdl-cell mdl-cell--12-col mdl-grid">
                {{#filteredSalaries}}
                <salarie-card salarie="{{this}}" />
                {{/salaries}}
            </div>
        </main>
    `,
    components: {
        'salarie-card': SalarieCard
    },
    oninit: function () {
        SalarieService.getSalaries().then((salaries) => {
            salaries = salaries.map((salarie) => {
                salarie.fullname = salarie.getFullName();
                return salarie;
            });
            this.set('salaries', salaries);
        });

        //
        this.observe('keyword salaries', function () {
            var salaries = this.get('salaries') || [];
            var keyword = this.get('keyword');
            var filteredSalaries = this.filterSalaries(salaries, keyword);
            this.set('filteredSalaries', filteredSalaries);
        }.bind(this));
        //

        this.on('virement-box.virementOrder', function (salarieId, montantVirement, showProgress, callback) {
            var salaries = this.get('salaries');
            var salarie = salaries.find(function (salarie) {
                return salarie.id === salarieId;
            });
            var salarieIndex = salaries.indexOf(salarie);
            //
            showProgress();

            VirementService.postVirement(salarieId, montantVirement).then( () => {
                this.subtract('salaries.' + salarieIndex + '.balance', montantVirement);
                if (callback) {
                    callback();
                }
                this.fire('virementposted');
            });
        });

        //
    },
    filterSalaries: function (salaries, keyword) {
        if (!keyword) {
            return salaries;
        } else {
            return salaries.filter(function (salarie) {
                var isFilterSatisfied = salarie.firstname.toLowerCase().includes(keyword)
                    || salarie.lastname.toLowerCase().includes(keyword)
                    || salarie.iban.toLowerCase().includes(keyword);
                return isFilterSatisfied;
            });
        }
    }
});
