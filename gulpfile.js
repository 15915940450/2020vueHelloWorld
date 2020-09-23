/* eslint-disable */
var parseArgs = require('minimist');
var del=require('del');


const {task,src,dest}=require('gulp');

/*
* emotor：初始化项目到 xxx yyy ..
*/
task('emotor',function(cb){
  var __argv2=process.argv.slice(2);
  var argv=parseArgs(__argv2);
  // console.log(argv);  //{ _: [ 'emotor' ], project: 'new' }

  //默认 x
  var __dest;
  if(argv.project==='x'){
    __dest='../xxx';
  }

  if(argv.project==='y'){
    __dest='../yyy';
  }

  src([
    './**/*',
    '!node_modules/**',
    '!.git/**',
    '!./gulpfile.js',
    '!./README.md',
    '!./package-lock.json'
    ],{
      dot:true
    })
    .pipe(dest(__dest));

  cb();
});


// https://gulpjs.com/docs/en/api/task
task('default',function(cb){
  del(['../dist/**/*'],{force:true}).then(function(){
    src(['./dist/**/*'],{base:'./'})
      .pipe(dest('../'));
  });
  console.log('default: see http://www.cantondist.com/');
  cb();
});



