# [gulp](http://gulpjs.com)-esnext [![Build Status](https://travis-ci.org/sindresorhus/gulp-esnext.svg?branch=master)](https://travis-ci.org/sindresorhus/gulp-esnext)

> Transform next-generation JavaScript to today's JavaScript with [esnext](https://github.com/square/esnext)

*Issues with the output should be reported on the esnext [issue tracker](https://github.com/square/esnext/issues).*


## Install

```sh
$ npm install --save-dev gulp-esnext
```


## Usage

```js
var gulp = require('gulp');
var esnext = require('gulp-esnext');

gulp.task('default', function () {
	return gulp.src('src/app.js')
		.pipe(esnext())
		.pipe(gulp.dest('dist'));
});
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
