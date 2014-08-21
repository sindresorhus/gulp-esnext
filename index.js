'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var esnext = require('esnext');
var applySourceMap = require('vinyl-sourcemaps-apply');

module.exports = function (options) {
	options = options || {};

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			this.push(file);
			return cb();
		}

		if (file.isStream()) {
			this.emit('error', new gutil.PluginError('gulp-esnext', 'Streaming not supported'));
			return cb();
		}

		try {
			if (file.sourceMap) {
				options.sourceFileName = file.relative;
				options.sourceMapName = file.relative;
			}

			var res = esnext.compile(file.contents.toString(), options);

			file.contents = new Buffer(res.code);

			if (res.map && file.sourceMap) {
				applySourceMap(file, res.map);
			}
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-esnext', err, {fileName: file.path}));
		}

		this.push(file);
		cb();
	});
};
