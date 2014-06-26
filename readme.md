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

## API

### esnext(options)

#### options

[Options](https://github.com/square/esnext/blob/b12248e0a0e60df04c5292bf8265b55c42d4b480/lib/index.js#L25) are passed through to esnext.

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
