const expect = require('chai').expect;
const $ = require('jquery');
const Ractive = require('ractive');
const sinon = require('sinon/pkg/sinon');
const getContainerFixture = require('../setup/utils').getContainerFixture;
import MainSection from '../../app/js/components/ecosystems/MainSection';
import VirementService from '../../app/js/services/VirementService';
import Salarie from '../../app/js/models/Salarie';

describe('MainSection', function () {

    var fixture;

    before(() => {
        Ractive.decorators.mdl = function (node) {
            return {
                teardown: function () {
                }
            };
        };
        fixture = getContainerFixture(document);
    });

    after(() => {
        fixture.innerHTML = '';
    });

    it('Doit être invocable sans erreur', function (done) {

        var component = new MainSection();

        expect(component).to.not.null;
        expect(component instanceof Ractive).to.be.true;
        expect(component.toHTML()).to.exist;

        done();
    });

    it('Doit pouvoir arriver à faire appel au service virement', function (done) {

        //sinon.spy(VirementService, 'postVirement');
        sinon.stub(VirementService, 'postVirement').returns(new Promise((fulfill) => {
            fulfill();
        }));

        var ractive = new Ractive({
            el: fixture,
            template: '<main-section salaries="{{salaries}}" />',
            components: {
                'main-section': MainSection
            },
            data: {
                salaries: [
                    new Salarie(1, 'M', 'John', 'Doe', '/images/male.png', 1000, 'FR7618206002106577244700112')
                ]
            }
        });

        //
        var cardSelector = '.app-virement-boxes .app-card-virement:first';
        //
        ractive.on('main-section.virementposted', function () {
            try {
                expect(VirementService.postVirement.withArgs(1, 300).calledOnce, "Le service VirementService.postVirement n'a pas été appelé avec les bons arguments").to.be.true;
                var balance = $(cardSelector).find('.balance');
                expect(balance.text(), 'La nouvelle balance est incorrecte').to.equal('700');
                done();
            } catch (error) {
                done(error);
            }
        });
        //

        var $cardBox = $(cardSelector);
        var balance = $cardBox.find('.balance');
        var $montantField = $cardBox.find('.app-montant input');
        var $confirmerCheckbox = $cardBox.find('.app-confirm-virement');
        var $validerButton = $cardBox.find('.app-valider-virement');

        expect($validerButton.attr('disabled')).to.be.not.null;

        $montantField.val(300);
        $confirmerCheckbox.find('input').click();

        expect($validerButton.attr('disabled')).to.be.equal(undefined);

        $validerButton.click();

    });

});