/**
 * Class for handling profile tracks
 *
 * @param {String} trackid
 * @param {Number} width
 * @param {Number} height
 * @param {Object} metadata
 */
var TrackOrientedProfile = function(trackid, width, height, metadata) {
  var self = this;
  TrackProfile.call(this, trackid, width, height, metadata);
};

TrackOrientedProfile.prototype = new TrackProfile;

/**
 * Request data of the track between 2 positions of a seqid.
 * The callback is triggered with the collected data
 *
 * @param {string} seqid
 * @param {Number} start
 * @param {Number} end
 * @param {Function} callback
 * @api private
 */
TrackOrientedProfile.prototype.getData = function(seqid, strand, start, end, callback, force) {
  force = force || false;
  var self = this
    , reqURL = '/'+ window.location.href.split('/').slice(3, 5).join('/');
  if (!force && seqid === self.seqid && start === self.start && end === self.end) {
    callback(self.data);
  }
  else {
    $.ajax({
      type: "POST"
    , url: reqURL
    , data: {
        seqid: seqid
      , strand: strand
      , start: start
      , end: end
      , trackID: self.trackid
      }
    , dataType: "json"
    , beforeSend: function() {
        $('#track'+self.trackid).append(self.spinner);
      }
    , complete: function(data) {
        $('#spinner'+self.trackid).remove();
      }
    , success: function(data) {
        self.seqid = seqid;
        self.start = start;
        self.end = end;
        self.data = data;
        callback(data);
      }
    });
  }
};

/**
 * Draw the track's data.
 *
 * @param {Array} data
 * @param {Number} start
 * @param {Number} end
 * @see drawData()
 */
TrackOrientedProfile.prototype.draw = function(seqid, start, end) {
  var self = this;
  async.parallel({
    plus: function(callback) {
      self.getData(seqid, '+', start, end, function(data) {
        callback(null, data);
      });
    },
    minus: function(callback) {
      self.getData(seqid, '-', start, end, function(data) {
        callback(null, data);
      });
    }
  },
  function(err, data) {
    console.log(data.plus.slice(0, 10));
    console.log(data.minus.slice(0, 10));
  });
};

/**
 * Draw the profile in the track canvas
 *
 * @param {Array} data
 * @param {Number} start
 * @param {Number} end
 */
TrackOrientedProfile.prototype.drawData = function(data, start, end) {
  var self = this;
  var xvals = [];
  var yvals = [];
  var i = 0;
  if (data.length !== 0) {
    data.forEach(function(doc) {
      xvals.push(~~((doc.start + doc.end) / 2));
      yvals.push(doc.score);
    });
    self.resize(self.canvas.width, 150);
    self.documents = self.canvas.linechart(
        25, 5,
        self.width-50, 150,
        [xvals, [xvals[0]]],
        [yvals, [self.maxvalue]],
        self.metadata.style
    ).hoverColumn(
      function(){
        this.popups = self.canvas.set();
        this.popups.push(self.canvas.popup(
          this.x, this.y[0],
          ~~(this.values[0])+' | '+~~(this.axis)
        ).insertBefore(this));
      },
      function() {
        this.popups && this.popups.remove();
      }
    );
  }
};

