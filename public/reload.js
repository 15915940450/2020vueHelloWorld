// https://developer.mozilla.org/zh-CN/docs/Web/API/Location/reload
// https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setInterval

/*
* checkAndDoReload:每55分钟检查是否需要刷新（凌晨4:00），如果是：咁就reload
*/
var checkAndDoReload=function(){
  window.localStorage.hasreload=window.localStorage.hasreload || 'no';
  var numInterval=55*60*1000;

  window.setInterval(function(){
    console.log(new Date().toLocaleString());
    if((new Date().getHours())===4){  //getHours
      if(window.localStorage.hasreload==='no'){
        window.localStorage.hasreload='yes';
        window.location.reload(true);
      }
    }else{
      window.localStorage.hasreload='no';
    }
  },numInterval);
};
checkAndDoReload();