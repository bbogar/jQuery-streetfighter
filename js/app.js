$(document).ready(function(){
	playTheme();
	$(".ryu").mouseenter(function(){
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})
	.mouseleave(function(){
		$(".ryu-still").show();
		$(".ryu-ready").hide();
	})
	.mousedown(function(){
		playHadouken();
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show().animate({"left": "300px"}, 500, function(){
					$(this).hide();
					$(this).css("left", "-212px");
				});	
	})
	.mouseup(function(){
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
	});

	$(document).on("keydown", function(x){
		if(x.keyCode == 88) {
			$(".ryu-ready").hide();
			$(".ryu-cool").show();
		}
	})
	.on("keyup", function(x){
		if(x.keyCode == 88) {
			$(".ryu-ready").show();
			$(".ryu-cool").hide();
		}
	});

	$(".logo").fadeIn("slow", function(){
		$(this).delay("2000").fadeOut("slow", function(){
			$(".instructions").fadeIn("slow");
		});
	});
	
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playTheme (){
	$("#theme")[0].volume = 0.5;
	$("#theme")[0].load();
	$("#theme")[0].play();
}