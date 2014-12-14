'use strict';

var _ = require('lodash');

var mongoose = require('mongoose');
var DietModel = mongoose.model('Diet');

// get the diet(s) specified
exports.get = function(req, res) {
  // find diet(s) matching the query or error out
  DietModel.find(req.dietQuery).exec(function(err, diets) {
    if(err) {
      return res.status(400).send({
        message: 'Something went wrong.'
      });
    }
    else {
      res.json(diets);
    }
  });
};

// update the diet(s) specified
exports.update = function(req, res) {
  var diets = req.dietQuery;

  // update the diet(s) in the database
  diets.save(req.dietQuery).exec(function(err) {
    if(err) {
      return res.status(400).send({
        message: 'Something went wrong.'
      });
    }
    res.json(diets);
  });
};

exports.create = function(req, res) {
  var diets = new DietModel(req.dietQuery);

  // insert the diet(s) into the database
  diets.save(function(err) {
    if(err) {
      return res.status(400).send({
        message: 'Something went wrong.'
      });
    }
    res.json(diets);
  });
};

exports.delete = function(req, res) {
  var diets = req.dietQuery;

  // delete the specified diet(s)
  diets.remove(function(err) {
    if(err) {
      return res.status(400).send({
        message: 'Something went wrong.'
      });
    }
    res.json(diets);
  });
};

// check if the query can be used by Mongoose
exports.dietQuery = function(req, res, next, query) {
  // use what is already there, the body, or the URL parameter,
  // whichever is defined first, or null
  req.dietQuery = _.union(req.dietQuery, req.body, query) || null;
  console.log(req.dietQuery);
};