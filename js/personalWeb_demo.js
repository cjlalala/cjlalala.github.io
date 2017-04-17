//事件绑定函数，兼容浏览器
function addEvent(dom,type,fn){
    if(dom.addEventListener){
        dom.addEventListener(type,fn,false);
    }
    else if(dom.attachEvent){
        dom.attachEvent('on'+type,fn);
    }
    else dom['on'+type]=fn;
}
window.onload=function(){
  //导航栏滚动固定
  window.onscroll=function(){
    var nav=document.getElementById('nav'),
        top=document.getElementById('top');
    var target_top=document.body.scrollTop||document.documentElement.scrollTop;
    target_top >= 50? nav.className = "fixed":nav.className = "";
    target_top>=100?top.style.display='block':top.style.display='none';
    addEvent(top,'click',function(){
        window.scrollTo(0,0);
    });
  }
}
