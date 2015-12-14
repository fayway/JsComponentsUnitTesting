'use strict';
const expect = require('chai').expect;
const $ = require('jquery');
const Ractive = require('ractive');
const getContainerFixture = require('../setup/utils').getContainerFixture;
import App from '../../app/js/components/environment/App';

describe('App', function () {

    var fixture;

    before(() => {
        fixture = getContainerFixture(document);
    });

    after(() => {
        fixture.innerHTML = '';
    });


    it('Doit être invocable sans erreur', function (done) {

        expect(App).to.not.null;
        expect(App.bootstrap).to.exist;

        done();
    });

    it('Doit embarquer les composants ecosystems', function (done) {
        var ractive = App.bootstrap({container: fixture});

        expect(ractive.findComponent('demo-header')).to.exists;
        expect(ractive.findComponent('demo-drawer')).to.exists;
        expect(ractive.findComponent('demo-main')).to.exists;

        done();
    });

});