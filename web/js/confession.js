$(document).ready(function() {
	$("#no").mouseenter(function() {
		var text = new Array();
		text[0] = "嘿嘿...";
		text[1] = "来追我呀";
		text[2] = "不要点我嘛";
		text[3] = "不让你点";
		text[4] = "求求你了";
		text[5] = "我喜欢你呀";
		text[6] = "555...";
		text[7] = "辣么绝情";
		text[8] = "同意我嘛";
		text[9] = "好不好嘛";
		text[10] = "加油加油";
		text[11] = "我会努力的";
		text[12] = "干嘛老追我";
		text[13] = "生气啦^_^";
		text[14] = "乖...点好呀";
		var int = Math.floor(Math.random()*15);
		var x = Math.random()*600;
		var y = Math.random()*1200;
		$("#div_no").offset({top:x, left:y});
		$("#d_no").css("background-color", "yellow");
		$("#d_no").text(text[int]);
	});
	$("#yes").click(function() {
		location.href = "agree.html";
	});
});

$(document).ready(function() {
	setTimeout("typing()", 3000);
});
		
var text = "嘿嘿......... 猪猪... 我... 喜欢你...... 做我女盆友呗！ 直接关窗口是小猪哦 ^_^...";
var index = 0;
var id;
function typing() {
	$("#typing").text("");
	$("#typing").show();
	typed();
}

result = "";
function typed() {
	result += text.charAt(index);
	$("#typing").text(result + (index & 1 ? "_" : " "));
	if(index < text.length-1) {
		index++;
		id = setTimeout("typed()", 250);
	}else {
		clearTimeout(id);
	}
}


