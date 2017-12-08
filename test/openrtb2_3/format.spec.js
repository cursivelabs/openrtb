var Format = require('../../lib/openrtb2_3/format').object;
var FormatBuilder = require('../../lib/openrtb2_3/format').builder;
var RtbObject = require('../../lib/rtbObject');

describe("The Format object should", function() {
	it("be an instance of RtbObject", function() {
	  var format = new Format();
	  format.should.be.an.instanceof(RtbObject);
	});
});
