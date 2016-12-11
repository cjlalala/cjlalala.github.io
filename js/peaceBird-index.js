
//图片轮播
var num=0;
var arr= new Array();
		arr[0]="img/1.jpg";
		arr[1]="img/2.jpg";
		arr[2]="img/3.jpg";
		
var	lunbo=setInterval(turnpic,2000);
	placeholder=document.getElementById("placeholder");
	function turnpic(){  
		num==arr.length-1 ? num=0: num+=1;
		placeholder.src=arr[num];
	}
	placeholder.onmouseover=function(){
	clearInterval(lunbo);
}
	placeholder.onmouseout=function(){
	lunbo=setInterval(turnpic,2000);
}

$(window).scroll(function(){
		var targetTop = $(this).scrollTop();
		//固定导航栏
		targetTop >= 150?$("#navg").addClass("fixedSubNav"):$("#navg").removeClass("fixedSubNav");
		//回到顶部
		targetTop > 100 ? $('div[class=scroll]').fadeIn():$('div[class=scroll]').fadeOut();
		$('#scroll').click(function(){
				$("html,body").animate({scrollTop:0},200);	
			});
  });
//导航栏下拉菜单
  $(document).ready(function(){
        $("#nav-new").hover(function(){
            $(".new-menu").removeClass("hidden");
        });
        $(".new-menu").hover(function(){
        	$(this).removeClass("hidden");
        },function(){
        	$(".new-menu").addClass("hidden");
        });
  	});
   $(document).ready(function(){
        $("#nav-clothing").hover(function(){
            $(".clothing-menu").removeClass("hidden");
        });
        $(".clothing-menu").hover(function(){
        	$(this).removeClass("hidden");
        },function(){
        	$(".clothing-menu").addClass("hidden");
        });
  	});
    $(document).ready(function(){
        $("#nav-accessory").hover(function(){
            $(".accessory-menu").removeClass("hidden");
        });
        $(".accessory-menu").hover(function(){
        	$(this).removeClass("hidden");
        },function(){
        	$(".accessory-menu").addClass("hidden");
        });
  	});
	
