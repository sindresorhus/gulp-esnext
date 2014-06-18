'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var esnext = require('esnext');

module.exports = function (options) {
	if (!options) {
		options = {};
	}
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			this.push(file);
			return cb();
		}

		if (file.isStream()) {
			this.emit('error', new gutil.PluginError('gulp-esnext', 'Streaming not supported'));
			return cb();
		}

		var fileOptions = Object.create(options);
		if (options.sourceMap) {
			fileOptions.sourceFileName = file.path;
			fileOptions.sourceMapName = file.path + '.map';
		}
		try {
			var res = esnext.compile(file.contents.toString(), fileOptions);

			var code = res.code;

			if (options.sourceMap && res.map) {
				code += '\n//# sourceMappingURL=data:application/json;base64,';
				code += new Buffer(JSON.stringify(res.map)).toString('base64');
				code += '\n';
			}

			file.contents = new Buffer(code);
			if (!options.sourceMap && res.map) {
				this.push(new gutil.File({
					cwd: file.cwd,
					base: file.base,
					path: file.path + '.map',
					contents: new Buffer(JSON.stringify(res.map))
				}));
			}
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-esnext', err));
		}

		this.push(file);
		cb();
	});
};