const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Index Page', function() {
  it('Correct status code?', function(done) {
    request('http://localhost:7865/', function(
	    					error,
	    					response,
	    					body
    ) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', function(done) {
    request('http://localhost:7865/', function(
	    					error,
	    					response,
	    					body
    ) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
