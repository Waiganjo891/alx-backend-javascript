const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Index Page', function() {
  it('Correct status code?', function(done) {
    request('http://localhost:7865/', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', function(done) {
    request('http://localhost:7865/', function(error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart Page', function() {
  it('Correct status code when :id is a number', function(done) {
    request('http://localhost:7865/cart/123', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('Correct result when :id is a number', function(done) {
    request('http://localhost:7865/cart/123', function(error, response, body) {
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });
  it('404 status code when :id is not a number', function(done) {
    request('http://localhost:7865/cart/abc', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
  it('404 error message when :id is not a number', function(done) {
    request('http://localhost:7865/cart/abc', function(error, response, body) {
      expect(body).to.equal('Invalid cart ID');
      done();
    });
  });
});

describe('/available_payments', function() {
  it('Correct status code and response structure', function(done) {
    request('http://localhost:7865/available_payments', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      const jsonResponse = JSON.parse(body);
      expect(jsonResponse).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('/login', function() {
  it('Correct status code and message with userName', function(done) {
    request.post({
      url: 'http://localhost:7865/login',
      json: { userName: 'JohnDoe' }
    }, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome JohnDoe');
      done();
    });
  });

  it('400 status code when userName is missing', function(done) {
    request.post({
      url: 'http://localhost:7865/login',
      json: {}
    }, function(error, response, body) {
      expect(response.statusCode).to.equal(400);
      expect(body).to.equal('Missing userName');
      done();
    });
  });
});
