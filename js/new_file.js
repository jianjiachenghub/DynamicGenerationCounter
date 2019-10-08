//分别载入数据，然后用封装的函数绑定ID
var button_name = [
	[7, 8, 9, '-'],
	[4, 5, 6, '+'],
	[1, 2, 3, '*'],
	['.', 0, '%', '/'],
	["(",")", '=','√'],
	["clear", "back"]
];
var button_nameid = [
	["seven", "eight", "nine", "subtraction"],
	["four", "five", "six", "and"],
	["one", "two", "three", "multiplication"],
	["dian", "zero", "remainder", "division"],
	["left","right", "equal",'sign'],
	["clear", "back"]
];
var header = document.createElement("div");
var input = document.createElement("input");
//创建计算器框架
header.setAttribute("class", "header");
document.body.appendChild(header);
input.setAttribute("id", "input");
input.setAttribute("type", "text");
header.appendChild(input);
//调用封装的函数快速构建按键button
for(var i = 0; i < button_name.length; i++) {
	for(var j = 0; j < button_name[i].length; j++) {
		header.appendChild(button(button_name[i][j], button_nameid[i][j]))
	}
}

function button(innerHTML, nameid) { //封装函数，构造button并且绑定ID,添加事件指向
	var new_button = document.createElement("button")
	new_button.setAttribute("id", nameid)
	new_button.addEventListener("click", function() {
		inputEventid(this.id)
	}, false)//委托事件
	new_button.innerHTML = innerHTML;
	return new_button;
}

function inputEventid(id) { //添加事件内容
	if(id != "clear" && id != "back" && id != "equal"&&id!="sign") {
		var button_inner = document.getElementById(id).innerHTML;
		var input_show = document.getElementById("input");
		input_show.value = input_show.value + button_inner;
	}
	//当点击等于时调用函数eval计算表达式
	if(id == "equal") {
		count();
	}
	if(id == "clear") {
		var show_input = document.getElementById("input");
		show_input.value = "";
	}
	if(id == "back") {
		var show_input = document.getElementById("input");
		show_input.value = show_input.value.substring(0, show_input.value.length - 1);
	}
	if(id == "sign"){
		count();
		var show_input = document.getElementById("input");
		show_input.value = Math.sqrt(document.getElementById('input').value);
	}
}

function count(){
	var input = document.getElementById("input");
		var input_array = input.value.split("");
		try{
		var show_input = document.getElementById("input");
		show_input.value = eval(document.getElementById('input').value).toFixed(2);
		}catch(err){
		alert("表达式错误")
		} 
		//用相邻的符号的ascll码值来判断输入是否正确，如果运算符重复如“ 2..1  ++  -+ ” 等
		/*for(var i = 0; i < input_array.length - 1; i++) {
			if((input_array[i].charCodeAt() >= 33 && input_array[i].charCodeAt() <= 47) && (input_array[i + 1].charCodeAt() >= 33 && input_array[i + 1].charCodeAt() <= 47)) {
				console.log(input_array[i]);
				input.value = "运算符重复!!!!!!!!!";
				return 0;
			}
			if((input_array[i]>='a'&&input_array[i]<='z')||(input_array[i]>='A'&&input_array[i]<='Z')){
				console.log("aaa")
				input.value = "不能输入字母!!!!!!!!!";
				return 0;
			}
		}
		var show_input = document.getElementById("input");
		show_input.value = eval(document.getElementById('input').value).toFixed(2);*/
}
