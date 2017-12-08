var assert = require('assert');
var test = require('../src/infix-to-postfix');

describe('Array', function() {
  describe('#Infix Convert to Postfix()', function() {
    it('should return null when the value is not present', function() {
      
      assert.equal('', test.infixToPostfix(''));
    });
    it('Test Case 1', function() {

      assert.equal('12+'.replace(/ /g,''), test.infixToPostfix('1 + 2').replace(/ /g,''));
      assert.equal('1 2 + 4 - *'.replace(/ /g,''), test.infixToPostfix('(1 + 2) * (-4)').replace(/ /g,''));
      assert.equal('3 4 * 2 5 + / 3 4 + *'.replace(/ /g,''), test.infixToPostfix('((3 * 4) / (2 + 5)) * (3 + 4)').replace(/ /g,''));
      assert.equal('3 4 * 2 5 + / 3 4 + *'.replace(/ /g,''), test.infixToPostfix('((  3*   4)/   ( 2+5  ) )*(  3+4)').replace(/ /g,''));
      assert.equal('4 8 6 * + 5 3 / - 2 2 * - 2 +'.replace(/ /g,''),test.infixToPostfix('4+8*6-5/3-2*2+2'));
    });
    it('Test Simple case', function () {

    	assert.equal('11+'.replace(/ /g,''), test.infixToPostfix('1+1'));
    	assert.equal('1 22 3 * +'.replace(/ /g,''), test.infixToPostfix('1+22*3'));
    	assert.equal('1 2 3 * 2 / + 1 -'.replace(/ /g,''), test.infixToPostfix('1+2*3/2-1'));
    	assert.equal('14 2 2 ^ +'.replace(/ /g,''), test.infixToPostfix('14+2^2'));
    });
    it('Test Complex term', function () {

    	assert.equal('1 1 + 29 *'.replace(/ /g,''), test.infixToPostfix('(1+1)*29'));
    	assert.equal('1 25 3 * +'.replace(/ /g,''), test.infixToPostfix('1+(25*3)'));
    	assert.equal('11 2 37 * + 2 1 - /'.replace(/ /g,''), test.infixToPostfix('(11+2*37)/(2-1)'));
    	assert.equal('1 253 + 2 ^'.replace(/ /g,''), test.infixToPostfix('(1+253)^2'));
    	assert.equal('4 2 ^ 3 * 3 - 8 4 / 1 1 + / +'.replace(/ /g,''), test.infixToPostfix('4^2*3-3+8/4/(1+1)'));
    });
    it('Test Not expression', function () {

      assert.equal('This is not expression!', test.infixToPostfix('1&5'));
      assert.equal('This is not expression!', test.infixToPostfix('1+(25*3)$'));
      assert.equal('This is not expression!', test.infixToPostfix('(11$+2*37)/(2-1)'));
      assert.equal('This is not expression!', test.infixToPostfix('(1+25^$3)^2'));
      assert.equal('This is not expression!', test.infixToPostfix('4^2*3-3$^+8/4/(1+1)'));
    });


  });
});