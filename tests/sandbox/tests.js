const expect = require('chai').expect;

describe('Array', () => {

    describe('#indexOf()', () => {

        it('should return -1 when the value is not present', () => {
            expect([1, 2, 3].indexOf(5)).to.equal(-1);
            expect([1, 2, 3].indexOf(0)).to.equal(-1);
        });

        it('should return right index when the value is present', () => {
            expect([1, 2, 3].indexOf(1)).to.equal(0);
            expect([1, 2, 3].indexOf(3)).to.equal(2);
        });
    });

});