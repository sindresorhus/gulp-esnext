'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var esnext = require('esnext');

module.exports = function () {
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
			var res = esnext.compile(file.contents.toString());

			file.contents = new Buffer(res.code);

			if (res.map) {
				this.push(new gutil.File({
					cwd: file.cwd,
					base: file.base,
					path: file.path + '.map',
					contents: new Buffer(res.map)
				}));
			}
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-esnext', err));
		}

		this.push(file);
		cb();
	});
};
