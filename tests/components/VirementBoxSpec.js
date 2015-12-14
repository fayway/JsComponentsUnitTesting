const expect = require('chai').expect;
const $ = require('jquery');
const Ractive = require('ractive');
const getContainerFixture = require('../setup/utils').getContainerFixture;
import VirementBox from '../../app/js/components/atoms/virement-box/VirementBox';

describe('VirementBox Component', function () {

    var fixture;

    before(() => {
        fixture = getContainerFixture(document);
    });

    after(() => {
        fixture.innerHTML = '';
    });

    it('Doit être invocable sans erreur', function (done) {

        var component = new VirementBox();

        expect(component).to.not.null;
        expect(component instanceof Ractive).to.be.true;
        expect(component.toHTML()).to.exist;

        done();
    });

    it('Doit déclencher un événement Ractive', function (done) {

        var ractive = new Ractive({
            el: fixture,
            template: '<virement-box />',
            components: {
                'virement-box': VirementBox
            },
            data: {
                salarieId: 125
            }
        })

        ractive.on('virement-box.virementOrder', function (salarieId, montantVirement) {
            try {
                expect(salarieId).to.equal(125);
                expect(montantVirement).to.equal(1500);
                done();
            } catch (error) {
                done(error);
            }
        });

        var $montantField = $('.app-montant input');
        var $confirmerCheckbox = $('.app-confirm-virement ');
        var $validerButton = $('.app-valider-virement');

        expect($validerButton.attr('disabled')).to.be.not.null;

        $montantField.val(1500);
        $confirmerCheckbox.find('input').click();

        expect($validerButton.attr('disabled')).to.be.equal(undefined);

        $validerButton.click();
    });

});