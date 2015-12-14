const expect = require('chai').expect;
const $ = require('jquery');
const Ractive = require('ractive');
const getContainerFixture = require('../setup/utils').getContainerFixture;
import SalarieCard from '../../app/js/components/organisms/salarie-card/SalarieCard';

describe('SalarieCard Component', function () {

    var fixture;

    before(() => {
        fixture = getContainerFixture(document);
    });

    after(() => {
        fixture.innerHTML = '';
    });

    it('Doit être invocable sans erreur', function (done) {

        var component = new SalarieCard();

        expect(component).to.not.null;
        expect(component instanceof Ractive).to.be.true;
        expect(component.toHTML()).to.exist;

        done();
    });

    it('Doit afficher les bonnes informations du salarié', function (done) {

        var ractive = new Ractive({
            el: fixture,
            template: '<salarie-card />',
            components: {
                'salarie-card': SalarieCard
            },
            data: {
                id: 1,
                civilite: 'M',
                fullname: 'John Doe',
                photo: '/images/male.png',
                iban: 'FR7618206002106577244700112',
                balance: 1000
            }
        });

        expect($('.app-salarie-name').text()).to.equal('John Doe');
        expect($('.balance').text()).to.equal('1000');
        expect($('img').attr('src')).to.equal('/images/male.png');

        var ibanText = $('.app-virement-iban').text();
        expect(ibanText).to.contain('FR');
        expect(ibanText).to.contain('76');
        expect(ibanText).to.contain('18206');
        expect(ibanText).to.contain('00210');
        expect(ibanText).to.contain('65772447001');
        expect(ibanText).to.contain('12');

        done();
    });

});