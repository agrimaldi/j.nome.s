/**
 * Module dependencies
 */
var Mongolian = require('mongolian')
var processProfile = require('../lib/cutils').processProfile;


var queryProfile = function(collection, seqid, start, end, step, callback) {
  var query = {
    seqid: seqid
  , start: { $lt: end }
  , end: { $gt: start }
  }
  if (step === 1000) {
    var queryCache = query;
    if (step === 1000) {
      queryCache.step = 1000
    }
    collection.find(queryCache).toArray(function(err, cachedDocs) {
      if (cachedDocs.length !== 0) {
        callback(err, cachedDocs);
      } else {
        collection.find(query).toArray(function(err, docs) {
          callback(err, processProfile(docs, step));
          if (step >= 1000) {
            // TODO update cached
          }
        });
      }
    });
  } else {
    collection.find(query).toArray(function(err, docs) {
      callback(err, processProfile(docs, step));
    });
  }
};

var queryRef = function(collection, seqid, start, end, step, callback) {
  collection.find({
    seqid: seqid
  , start: { $lt: end }
  , end: { $gt: start }
  }).toArray(function(err, docs) {
    callback(err, docs);
  });
};


/**
 * Class representing a track.
 * 
 * @param {String} name
 * @param {String} collection
 * @api public
 */
var Track = function(db, metadata) {
  this.metadata = metadata;
  this.db = db;
  this.collection = this.db.collection(metadata.id);
};

/**
 * Fetch all documents on seqid between 2 positions
 *
 * @param {String} seqid
 * @param {Number} start
 * @param {Number} end
 * @param {Function} callback
 * @api public
 */
Track.prototype.fetchInInterval = function(seqid, start, end, callback) {
  var self = this;
  var start = ~~start;
  var end = ~~end;
  var step = ~~(Math.min((end-start)/2000+1, 2000));
  var query = self.metadata.type === 'profile' ? queryProfile : queryRef;
  query(self.collection, seqid, start, end, step, function(err, docs) {
    callback(err, {
      metadata: self.metadata
    , data: docs
    });
  });
};



/**
 * Expose public functions, classes and methods
 */
exports.Track = Track;
