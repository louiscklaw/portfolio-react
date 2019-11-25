// yarn add gulp gulp-pug gulp-less gulp-csso gulp-concat gulp-javascript-obfuscator gulp-rename gulp-debug
const { src, dest, parallel, series } = require( 'gulp' );
const { exec, execSync } = require('child_process');
const chalk = require('chalk');

// const pug = require( 'gulp-pug' );
// const less = require( 'gulp-less' );
// const minifyCSS = require( 'gulp-csso' );
// const concat = require( 'gulp-concat' );

// const rename = require( 'gulp-rename' );
// const javascriptObfuscator = require( 'gulp-javascript-obfuscator' );

const debug = require( 'gulp-debug' );

function build(done){
  console.log(chalk.yellow('yarn build'))
  execSync('yarn build')
  done()
}

exports.default = build;
