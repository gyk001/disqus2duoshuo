'use strict';

var disqus2duoshuo = require('../lib/disqus2duoshuo.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['awesome'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no args': function(test) {
    test.expect(1);
    // tests here
    test.equal(disqus2duoshuo.awesome(), 'awesome', 'should be awesome.');
    test.done();
  }, 
  'xml paser': function(test) {
    test.expect(1);
    // tests here
    var rOption = {
      flags : 'r',
      encoding : 'UTF-8'
    };
    var fs = require('fs');
    var _ = require('underscore');
    var xml = fs.readFileSync(
      'test/disqus.xml',rOption);

    var parseString = require('xml2js').parseString;
    parseString(xml, function (err, result) {
        _.each(result.disqus.post,function(post){
          console.log(post);
        });
    });
    test.equal(disqus2duoshuo.awesome(), 'awesome', 'should be awesome.');
    test.done();
  },
};
