//CSS Compiler

const gulp = require("gulp")
const { src, dest } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const css = () => {
  return src("./src/css/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./dist/assets/"));
}
exports.css = css;


//JS Compiler

const concat = require("gulp-concat");
const js = () => {
  return src("./src/js/*.js")
    .pipe(concat("script.js"))
    .pipe(dest("./dist/assets/"));
}
exports.js = js;

//HTML Compiler

const pug = require("gulp-pug");
const html = () => {
  return src("./src/pug/views/*.pug")
    .pipe(pug({pretty: true,}))
    .pipe(dest("./dist"));
}
exports.html = html;



//Server

const browserSync = require('browser-sync').create();

// Static server
const { series } = require('gulp');
const serve = () => {

    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    })

    gulp.watch("./src/css/*.scss", css).on('change', browserSync.reload);
    gulp.watch("./src/pug/**/*.pug", html).on('change', browserSync.reload);
    gulp.watch("./src/js/*.js", js).on('change', browserSync.reload);
};

exports.serve = serve;