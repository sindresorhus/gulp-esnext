'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var esnext = require('./index');

it('should transpile ES6 to ES5 with esnext', function (cb) {
	var stream = esnext();

	stream.on('data', function (file) {
		if (/\.map$/.test(file.path)) {
			assert(/\"version":3/.test(file.contents.toString()));
			assert.equal(file.relative, 'fixture.js.map');
			return;
		}

		assert(/function/.test(file.contents.toString()));
		assert.equal(file.relative, 'fixture.js');
	})

	stream.on('end', cb);

	stream.write(new gutil.File({
		cwd: __dirname,
		base: __dirname + '/fixture',
		path: __dirname + '/fixture/fixture.js',
		contents: new Buffer('[].map(v => v + 1)')
	}));

	stream.end();
});
