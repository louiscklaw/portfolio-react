
// yarn add gulp gulp-pug gulp-less gulp-csso gulp-concat gulp-javascript-obfuscator gulp-rename gulp-debug

const { src, dest, parallel, series } = require( 'gulp' );
const { exec, execSync } = require('child_process');
const chalk = require('chalk');

// const ico = require('gulp-to-ico');
var favicons = require('gulp-favicons');

const {resize} = require('easyimage');

// const pug = require( 'gulp-pug' );
// const less = require( 'gulp-less' );
// const minifyCSS = require( 'gulp-csso' );
// const concat = require( 'gulp-concat' );

// const rename = require( 'gulp-rename' );
// const javascriptObfuscator = require( 'gulp-javascript-obfuscator' );

const debug = require( 'gulp-debug' );

function getFavIcon(done){
  console.log('getFavIcon');
  src( 'src/assets/favicon.png' )
    .pipe( favicons({
      html: 'index.html',
    }))
    .pipe(dest('./public/favicons'));


  done()
}

function getLogo(done){
  for( size of [192,512]){
    console.log(`public/assets/logo${size}.png`)
    resize({
      src: 'src/assets/favicon.png',
      dst: `public/assets/logo${size}.png`,
      width: size,
      height: size
    })
  }
  done()
}

exports.default = series(
  parallel(
    getFavIcon,
    getLogo
  ));
