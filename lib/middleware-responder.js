'use strict';

var _ = require('lodash');

exports.setRender = function(view){
  return function(req, res, next){
    req.render = view;

    next();
  };
};

exports.setRedirect = function(options){
  return function(req, res, next){
    if(req.redirect){
      req.redirect = _.merge(req.redirect, options);
    } else {
      req.redirect = options;
    }
    next();
  };
};