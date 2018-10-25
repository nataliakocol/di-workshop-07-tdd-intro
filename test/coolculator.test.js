var chai = require('chai');
var expect = chai.expect;

var Coolculator = require('../lib/coolculator');

describe('Coolculator', function() {
  mm = new Coolculator();

  it('should add', function() {
    result = mm.add(2,3);
    expect(result).to.equal(5);
  })

  // Uncomment this 👇
   it('should multiply', function() {
     result = mm.multiply(2, 3);
     expect(result).to.equal(6);
   })

  // Uncomment this 👇
   it('should subtract', function() {
     result = mm.subtract(3, 2);
     expect(result).to.equal(1);
   })

   it('should divide', function() {
     result = mm.divide(66, 11);
     expect(result).to.equal(6);
   })

   it('should not divide by 0', function() {
     result = mm.divide(3, 0);
     expect(result).to.equal('you cannot divide by 0!');
   })

   it('should square', function() {
     result = mm.square(9);
     expect(result).to.equal(81);
   })


    it('should raise', function() {
      result = mm.raise(2, 3);
      expect(result).to.equal(8);
    })

    it('should work for isCool', function() {
      result = mm.isCool(25352);
      expect(result).to.equal(true);
    })

    it('should calculate a factorial', function() {
      result = mm.factorial(4);
      expect(result).to.equal(24);
    })
    it('should work for random', function() {
      result = mm.random(67);
      expect(result).to.be.below(67);
      expect(result).to.be.above(0);
    })

})
