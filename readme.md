# [gulp](http://gulpjs.com)-esnext [![Build Status](https://travis-ci.org/sindresorhus/gulp-esnext.svg?branch=master)](https://travis-ci.org/sindresorhus/gulp-esnext)

> Transform next-generation JavaScript to today's JavaScript with [esnext](https://github.com/esnext/esnext)

*Issues with the output should be reported on the esnext [issue tracker](https://github.com/esnext/esnext/issues).*


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


## API

### esnext(options)

#### options

[Options](https://github.com/esnext/esnext/blob/fbfba30fb31893bd03cedb73fa97b91fa0b6dd01/lib/index.js#L29) are passed through to esnext.


## Source Maps

Use [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps) like this:

```js
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var esnext = require('gulp-esnext');
var concat = require('gulp-concat');

gulp.task('default', function () {
	return gulp.src('src/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(esnext())
		.pipe(concat('all.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist'));
});
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
