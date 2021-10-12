function sum_string(x) {
  var data = document.getElementById("show_value").value;
  data += x;
  document.getElementById("show_value").value = data;
}
function add_0(){
	sum_string(0);
}
function add_1(){
	sum_string(1);
}
function add_2(){
	sum_string(2);
}
function add_3(){
	sum_string(3);
}
function add_4(){
	sum_string(4);
}
function add_5(){
	sum_string(5);
}
function add_6(){
	sum_string(6);
}
function add_7(){
	sum_string(7);
}
function add_8(){
	sum_string(8);
}
function add_9(){
	sum_string(9);
}
function add_loop_1(){
 var data = document.getElementById("show_value").value;
  data += '(';
  document.getElementById("show_value").value = data;
}
function add_loop_2(){
  var data = document.getElementById("show_value").value;
  data += ')';
  document.getElementById("show_value").value = data;
}
function add_del(){
  var data = document.getElementById("show_value").value;
  var new_string = data.substring(0, data.length-1);
  document.getElementById("show_value").value = new_string;
}
function add_ca(){
  var data = document.getElementById("show_value").value;
  document.getElementById("show_value").value = '0';
}
function add_exponentiation(){
  var data = document.getElementById("show_value").value;
  data += '²';
  document.getElementById("show_value").value = data;
}
function add_square_root(){
var data = document.getElementById("show_value").value;
data += '√';
document.getElementById("show_value").value = data;	
}
function add_remainder(){
var data = document.getElementById("show_value").value;
data += '%';
document.getElementById("show_value").value = data;	
}
function add_div(){
var data = document.getElementById("show_value").value;
data += '/';
document.getElementById("show_value").value = data;	
}
function add_multip(){
var data = document.getElementById("show_value").value;
data += 'x';
document.getElementById("show_value").value = data;	
}
function add_sub(){
var data = document.getElementById("show_value").value;
data += '-';
document.getElementById("show_value").value = data;	
}
function add_plus(){
var data = document.getElementById("show_value").value;
data += '+';
document.getElementById("show_value").value = data;	
}
function add_doc(){
var data = document.getElementById("show_value").value;
data += '.';
document.getElementById("show_value").value = data;	
}
function add_result(){
	var data = document.getElementById("show_value").value;
	localStorage.setItem("history", data);
	//lưu lại vào his
	

}

function his() {
	var getHis = localStorage.getItem("history");
	document.getElementById("show_value").value = getHis;	
	console.log(getHis);
}