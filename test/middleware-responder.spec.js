var should = require('should'),
setRender = require('../lib/middleware-responder').setRender,
setRedirect = require('../lib/middleware-responder').setRedirect;

describe('middleware-responder', function(){
  describe('.setRender', function(){
    it('should return a render option for req.render', function(done){
      var req = {},
      res = {},
      next = function(req, res, next){
        done();
      };

      setRender('index')(req, res, next);
      req.render.should.equal('index');
    });
  });

  describe('.setRedirect', function(){
    it('should return an object with redirect settings', function(done){
      var req = {},
      res = {},
      next = function(req, res, next){
        done();
      };

      setRedirect({
        auth: '/',
        failure: '/failure',
        success: '/success'})(req, res, next);
      req.redirect.should.be.an.Object;
      req.redirect.auth.should.equal('/');
      req.redirect.failure.should.equal('/failure');
      req.redirect.success.should.equal('/success');
    });
  });
});