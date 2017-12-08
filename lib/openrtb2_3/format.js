const RtbObject = require('../rtbObject');
const removeEmptyValues = require('../utils').removeEmptyValues;

var Format = function(w, h, ext){
  this.w = w;
  this.h = h;
  this.ext = ext;
};

Format.prototype = Object.create(RtbObject.prototype);

var FormatBuilder = function(){};

FormatBuilder.prototype.w = function(w){
  this._w = w;
  return this;
};

FormatBuilder.prototype.h = function(h){
  this._h = h;
  return this;
};

FormatBuilder.prototype.ext = function(ext){
  this._ext = ext;
  return this;
};

FormatBuilder.prototype.build = function() {
  var format = new Format(this._w, this._h, this._ext);
  return removeEmptyValues(format);
};

module.exports = {
  object: Format,
  builder: FormatBuilder
};
