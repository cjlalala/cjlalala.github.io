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
  var imgHeight;
  clientW<541?imgHeight=50:imgHeight=document.body.clientHeight||document.documentElement.clientHeight;
  window.onscroll=function(){
    var nav=document.getElementById('nav'),
        top=document.getElementById('top');
    var target_top=document.body.scrollTop||document.documentElement.scrollTop;
    target_top >= imgHeight? nav.className = "fixed":nav.className = "";
    target_top>=imgHeight+50?top.style.display='block':top.style.display='none';
    addEvent(top,'click',function(){
        window.scrollTo(0,0);
    });
  }
}
var clientW=document.body.clientWidth||document.documentElement.clientWidth;
var curIndex = 0;
var arr =['img/indexImg/blog.png','img/indexImg/demo.png',
'img/indexImg/photo111.png','img/indexImg/word2.png'];
setInterval(function(){
  if(clientW>540)return;
  else{
    curIndex == arr.length-1? curIndex = 0:curIndex += 1; 
    document.getElementById("carPic").src = arr[curIndex]; 
  }
},2500); 
   

