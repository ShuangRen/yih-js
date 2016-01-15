var gulp = require('gulp');
var uglify = require('gulp-uglify');  //JS 压缩
var concat = require('gulp-concat');  //文件合并
// var jshint = require('gulp-jshint');  //js语法检测
// var cssmin = require('gulp-minify-css');  //css压缩
// var imagemin = require('gulp-imagemin');  //图片压缩
// var gulpif = require('gulp-if');  //图片压缩


//文件copy
//不能先copy 再压缩 之类 检测发现 copy 会后执行,导致你压缩好的会被还原
// gulp.task('copy',function(){
//    gulp.src('src/**')
//    .pipe(gulpif('*.html', gulp.dest('build')))
//    .pipe(gulpif('bower_components/**', gulp.dest('build')))
//    .pipe(gulpif('js/*.js', gulp.dest('build')))
// });


//JS 压缩
gulp.task('script', function () {
	gulp.src(['js/model/*.js','js/init.js', 'js/dom.js'])
  .pipe(concat('yih.js'))
	.pipe(uglify())
	.pipe(gulp.dest('build'));

});

//默认任务
// gulp.task('default',function(){
//    gulp.run('copy', 'script', 'cssmin', 'imagemin');
// });
