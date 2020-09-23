// ====vue.config.js


//toSlash
var toSlash=function(dateObjectInit,format){
  var dateObject;
  //判斷是否傳入了空或者─
  if(!dateObjectInit || dateObjectInit==='─'){
    return ('─');
  }

  //判斷是否傳入的是時間戳
  if(typeof(dateObjectInit)!=='object'){
    dateObject=new Date(window.Number(dateObjectInit));
  }

  //傳入了日期對象
  if(typeof(dateObjectInit)==='object'){
    dateObject=new Date(dateObjectInit.getTime());
  }


  format=format || {};
  var defaultFormat={
    zero:true,
    slash:'/',
    T:false
  };
  Object.assign(defaultFormat,format);

  var result='';
  function pad(number){
    if(+number<10){
      return '0'+number;
    }
    return number;
  }

  

  var utcHour=dateObject.getUTCHours();
  dateObject.setUTCHours(utcHour+8);  //utc+8 >>>>>>> HK

  var yyyy=dateObject.getUTCFullYear();
  var m=dateObject.getUTCMonth()+1;
  var d=dateObject.getUTCDate();
  var h=dateObject.getUTCHours();
  var i=dateObject.getUTCMinutes();
  var s=dateObject.getUTCSeconds();

  var mm=pad(m);
  var dd=pad(d);
  var hh=pad(h);
  var ii=pad(i);
  var ss=pad(s);

  var year,month,date,hour,minutes,seconds,strT;

  if(defaultFormat.zero){
    year=yyyy;
    month=mm;
    date=dd;
    hour=hh;
    minutes=ii;
    seconds=ss;
  }else{
    year=yyyy;
    month=m;
    date=d;
    hour=h;
    minutes=i;
    seconds=s;
  }

  if(defaultFormat.T){
    strT='T';
  }else{
    strT=' ';
  }


  result=year+defaultFormat.slash+month+defaultFormat.slash+date+strT+hour+':'+minutes+':'+seconds+'.000+08:00';
  return result;
};

//toHKstring
var toHKstring=function() {
  var result=toSlash(new Date(),{
    zero:true,
    slash:'-',
    T:true
  });
  
  //2020-09-18T13:13:05.000+08:00
  return result;
};



var version=require('./package.json').version+toHKstring(new Date());
process.env.VUE_APP_VERSION = version;


module.exports={
  lintOnSave:'warning',
  css:{
    sourceMap:true,
    loaderOptions:{
      scss:{
        //https://github.com/webpack-contrib/sass-loader#resolving-import-at-rules
        //https://cli.vuejs.org/zh/guide/css.html#%E5%90%91%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8-loader-%E4%BC%A0%E9%80%92%E9%80%89%E9%A1%B9
        //这里假设你有 `/src/veri.sass` 这个文件
        //`scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
        prependData:'@import "~@/veri.scss";'
      }
    }
  }
};