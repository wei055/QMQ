// index.js
$(document).ready(function() {
	setTimeout("adjust()", 10500);
});

function adjust() {
	var x = $("#flash_2").position();
	x.top -= 200;
	$("#flash_2").css("z-index", "-1");
	$("#flash_2").offset(x);
	var y = $("#prompt").position();
	y.top -= 200;
	$("#prompt").offset(y);
	var z = $("form").position();
	z.top -= 200;
	$("form").offset(z);
}

var int = 0;
function login() {
	int++;
	var date = document.getElementById("date").value;
	var prompt = document.getElementById("prompt");
	if(date == "") {
		prompt.innerHTML = "请先选择生日再登录喔";
		int = 0;
	}else {
		if(date != "1993-05-06") {
			switch(int) {
				case 1: prompt.innerHTML = "不对不对~农历生日啦^_^"; break;
				case 2: prompt.innerHTML = "咋啦？自己生日都记不住吗？"; break;
				case 3: prompt.innerHTML = "还是不对哦"; break;
				case 4: prompt.innerHTML = "多点几次登录吧"; break;
				case 8: prompt.innerHTML = "难道不是19930506吗^_^"; break;
			}
		}else {
			setTimeout("location.href = 'web/confession.html'", 2000);
			prompt.innerHTML = "你准备好了吗？嘿嘿嘿...";
		}
	}
}


