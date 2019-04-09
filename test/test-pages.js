//https://buddy.works/guides/how-automate-nodejs-unit-tests-with-mocha-chai
//npm install mocha chai --save-dev
//npm install request

var expect  = require('chai').expect;
var request = require('request');

describe('Status and content', function() {
    describe ('Main page', function() {
        it('status', function(done){
            request('http://localhost:3000/', function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('content', function(done) {
            request('http://localhost:3000/' , function(error, response, body) {
                expect(body).to.equal('Hello World!');
                done();
            });
        });
    });

    describe ('About page', function() {
        it('status', function(done){
            request('http://localhost:3000/about', function(error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

    });
});