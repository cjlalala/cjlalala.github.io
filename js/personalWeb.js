//导航栏滚动固定
window.onscroll=function(){
  var nav=document.getElementById('nav'),
      top=document.getElementById('top');
  var target_top=document.body.scrollTop||document.documentElement.scrollTop;
   target_top >= 700? nav.className = "fixed":nav.className = "scroll";
   target_top>=750?top.style.display='block':top.style.display='none';
   top.onclick=function(){
      window.scrollTo(0,0);
   }
}
/*轮播图*/
var limian =document.getElementById("limian");
var a=-3000;
function lunbo(){
  if(a==-840) a=-3000;
  else {a+=720;}
  var b=a+'px';
  limian.style.transform='translate('+b+',0)';
}
var time=setInterval('lunbo()',3000);
var id;
limian.onmouseover=function(e){
  clearInterval(time);
  var e = e || window.event;
  id=e.target.className;
  document.getElementById(id).style.display='block';
}
limian.onmouseout=function(){
  document.getElementById(id).style.display='none';
  time=setInterval('lunbo()',3000);
}
limian.onclick=function(e){
   var e = window.event || e;
   switch(e.target.alt){
    case 'blog':{
      window.scrollTo(0,1700);
      break;
    }
    case 'life':{
      window.scrollTo(0,2450);
      break;
    }
     case 'photo':{
      window.scrollTo(0,3400);
      break;
    }
    case 'leave':{
      window.scrollTo(0,4200);
      break;
    }
   }
}
var pre=document.getElementById("pre"),
    next=document.getElementById("next");
pre.onclick=function(){
  clearInterval(time);
  if(a==-840)a=-3000;
  else a+=720;
  var b=a+'px';
  limian.style.transform='translate('+b+',0)';
  time=setInterval('lunbo()',3000);
}
next.onclick=function(){
  clearInterval(time);
  if(a==-3000)a=-840;
  else a-=720;
  var b=a+'px';
  limian.style.transform='translate('+b+',0)';
  time=setInterval('lunbo()',3000);
}