# gulp-esnext [![Build Status](https://travis-ci.org/sindresorhus/gulp-esnext.svg?branch=master)](https://travis-ci.org/sindresorhus/gulp-esnext)

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

[Options](https://github.com/esnext/esnext/blob/8ccc0dec81c1cb9a5cf09346c1e1b25bfd630fe6/lib/index.js#L28) are passed through to esnext.


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
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist'));
});
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
