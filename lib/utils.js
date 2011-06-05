/**
 * Compute the size (number of elements) of a given object
 *
 * @param {Object} object
 * @return {Number} size
 * @api public
 */
Object.size = function(object) {
  var size = 0
    , key;
  for (key in object){
    if (object.hasOwnProperty(key)){
      size++;
    }
  }
  return size;
};
