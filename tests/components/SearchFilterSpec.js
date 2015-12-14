const expect = require('chai').expect;
const $ = require('jquery');
const Ractive = require('ractive');
const getContainerFixture = require('../setup/utils').getContainerFixture;
import SearchFilter from '../../app/js/components/atoms/SearchFilter';

describe('SearchFilter Component', function () {

    var fixture;

    before(() => {
        fixture = getContainerFixture(document);
    });

    after(() => {
        fixture.innerHTML = '';
    });

    it('Doit être invocable sans erreur', function (done) {

        var component = new SearchFilter();

        expect(component).to.not.null;
        expect(component instanceof Ractive).to.be.true;
        expect(component.toHTML()).to.exist;

        done();
    });

    it('Doit déclencher un événement Ractive', function (done) {

        var ractive = new Ractive({
            el: fixture,
            template: '<search-filter />',
            components: {
                'search-filter': SearchFilter
            }
        })

        ractive.on('search-filter.keywordchange', function (keyword) {
            try {
                expect(keyword).to.equal('test');
                done();
            } catch (error) {
                done(error);
            }
        });

        var $searchTextField = $('#search');
        $searchTextField.val('Test');
        $searchTextField.click();
    });

});