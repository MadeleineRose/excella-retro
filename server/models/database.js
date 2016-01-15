/* jslint node: true */
//var level = require('level');
//var path = require('path');
//
//var basePath = process.env.APP_DIR || ".";
//
//var dbPath = path.join(basePath, '/remoteRetroDb');
//
//console.log('Database path: ' + dbPath);
//
//var db = level(dbPath, { valueEncoding: 'json'});

var bluebird = require('bluebird');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var Collection = mongodb.Collection;

bluebird.promisifyAll(Collection.prototype);
bluebird.promisifyAll(MongoClient);

var url = process.env.MONGO_URI || 'mongodb://localhost:27017/RetroDb';

var dbPromise = MongoClient.connectAsync(url);

module.exports = {
    get: function(key, cb) {
        dbPromise.then(function(db) {
           db.collection('retro').findOne({ key: key }, function(err, retro) {
               if(err) {
                   cb(err);
               } else {
                   cb(err, retro.value);
               }
           });
        });
    },
    put: function(key, value, cb) {
        dbPromise.then(function(db) {
            db.collection('retro').update({ key: key }, {
                key: key,
                value: value
            }, { upsert: true }, function(err, retro) {
                if(err) {
                    cb(err);
                } else {
                    cb(err, retro.value);
                }
            });
        });
    },
    del: function(key, cb) {
        dbPromise.then(function(db){
            db.collection('retro').remove({ key: key }, function(err) {
               cb(err);
            });
        });
    }
};