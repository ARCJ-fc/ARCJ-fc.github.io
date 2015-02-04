var assert = require("assert")
  , nextPrime = require('indexjs').makeRequest;

suite('makeRequest', function() {
  test('makeRequest should return a string "hello"', function(done) {
    assert.equal(makeRequest("http://content.guardianapis.com/sections?api-key=8jytc2dmqf5mrb8vpxaz9mjz"), "hello");
    done();
  });
});