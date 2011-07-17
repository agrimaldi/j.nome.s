/**
 * Module dependencies
 */
var Mongolian = require('mongolian')
var processProfile = require('../lib/cutils').processProfile;


/**
 * Inserts a processed profile in the database.
 * Fetching from this cached profile is faster than
 * processing the processed profile each time.
 *
 * @param {MongolianCollection} collection
 * @param {String} seqid
 * @param {Number} step
 * @param {Function} callback
 */
var cacheProfile = function(collection, seqid, step, callback) {
  collection.find({ seqid: seqid }).toArray(function(err, docs) {
    pdocs = processProfile(docs, step);
    pdocs.forEach(function(doc) {
      doc.step = step;
      collection.insert(doc, function(){});
    });
    callback();
  });
};

/**
 * Function invoked to query a profile track (collection).
 * This function takes care of querying the cached profile if
 * it exists, or to compute it and cache it if it doesn't.
 * If the step used in the profile processing is lower than 2000,
 * the profile is processed on the fly.
 *
 * @param {MongolianCollection} col
 * @param {String} seqid
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 * @param {Function} callback
 */
var queryProfile = function(collection, seqid, start, end, step, callback) {
  var query = {
    seqid: seqid
  , start: { $lt: end }
  , end: { $gt: start }
  , step: { $ne: 2000 }
  };
  var sortOrder = {
    seqid: 1
  , start: 1
  , end: 1
  };
  if (step === 2000) {
    var queryCache = query;
    queryCache.step = 2000;
    collection.find(queryCache).sort(sortOrder).toArray(function(err, cachedDocs) {
      if (cachedDocs.length === 0) {
        cacheProfile(collection, seqid, step, function() {
          collection.find(queryCache).sort(sortOrder).toArray(function(err, cachedDocs) {
            callback(err, cachedDocs);
          });
        });
      } else {
        callback(err, cachedDocs);
      }
    });
  } else {
    collection.find(query).sort(sortOrder).toArray(function(err, docs) {
      callback(err, processProfile(docs, step));
    });
  }
};

/**
 * Function invoked to query a reference track.
 *
 * @param {MongolianCollection} collection
 * @param {String} seqid
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 * @param {Function} callback
 */
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
