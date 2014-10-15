# middleware-responder

[![Build Status](https://travis-ci.org/eddywashere/middleware-responder.png?branch=master)](https://travis-ci.org/eddywashere/middleware-responder)

A node.js middleware for setting render and redirect options on the req object. Specifically `req.render` and `req.redirect`.

To install:

```
npm install middleware-responder --save
```

Example usage:

routes.js

```js
var setRedirect = require('middleware-responder').setRedirect;
var setRender  = require('middleware-responder').setRender;

app.get('/', 
  setRender('home'), // req.render = 'homepage';
  userController.home);

app.post('/login', 
  setRedirect({failure: '/', success: '/dashboard'}), // req.redirect = {failure: '/', success: '/dashboard'};
  userController.postLogin);
```

user-controller.js

```js
exports.home = function(req, res, next){
  // app logic here

  res.render(req.render); // 'home'
};

exports.postLogin = function(req, res, next){
  // login logic here
  if(req.user){
    return res.redirect(req.redirect.success); // redirects to 'dashboard';
  }

  res.redirect(req.redirect.failure); // redirect to '/'
};
```