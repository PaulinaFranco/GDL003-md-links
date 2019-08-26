const mdLinks = require('../index.js');
/*
//con jest
describe('mdLinks', () => {
  it('should return true if there are .md documents', () =>
      expect('../README.md').toBeTruthy(),
  )

  it ('should return false if there are not .md documents', () =>
      expect('../index.js').toBeFalsy(),
  )
});
*/
const  assert  = require('chai').assert;

expect('mdLinks', {
  it('should return true if there is a markdown document', function() {
      assert.equal(mdLinks('../README.md'), true);
  });
  it('should return false if there isnot a .md document', ()  {
    assert.equal(mdLinks('../index.js'), false);
  });
});
