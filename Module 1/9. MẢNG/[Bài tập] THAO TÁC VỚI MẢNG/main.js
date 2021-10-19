var arr = [];
function add() {
	var data = document.getElementById("input_add").value;
	if(data == ''){
     document.getElementById("result").innerHTML = 'Nhập data !!!';
	}else{
       arr.push(data);
       document.getElementById("result").innerHTML = '';
       document.getElementById("input_add").value = '';
	}
}
function display() {
	 var string = '';
	 for (var i = 0; i < arr.length; i++) {
	 	 string += `Element ${i} = ${arr[i]}<br>`;
	 }	 
	      document.getElementById("result").innerHTML = string;
}
function reverse() {
	 var arr_reverse = arr.reverse();
	 var string = '';
	 for (var i = 0; i < arr_reverse.length; i++) {
	 	 string += `Element ${i} = ${arr_reverse[i]}<br>`;
	 }	 
	      document.getElementById("result").innerHTML = string;
}
function find() {
   var value_find = prompt("Enter a number: ");
   var string = '';
   for (var i = 0; i < arr.length; i++){
	   	if(arr[i]===value_find){
          string += `Tìm được ${value_find} tại index: ${i}<br>`;
	   	}
   }
   document.getElementById("result").innerHTML = string;
}
function find_max(){
	var max = 0;
	for(var i = 0; i < arr.length; i++){
	      if(arr[i] > max){
              max = arr[i];
	      }
	}
	document.getElementById("result").innerHTML = `Giá trí lớn nhất: ${max}`;
}
// Bài tập mảng 2
function clickShowColor(){
	var arrColor = ["Red", "Green", "White", "Black"];
    document.getElementById("result_2").innerHTML = arrColor.join();
}
function reverseText(){
	var data = document.getElementById("input_string").value;
    var arr_data = data.split('');
    var arr_data_re = arr_data.reverse();
    var newS = '';
    for(var i = 0; i < arr_data_re.length; i++){
    	if(arr_data_re[i] === arr_data_re[i].toUpperCase()){
    		newS += arr_data_re[i].toLowerCase();
    	}else{
    		newS += arr_data_re[i].toUpperCase();
    	}
    }
    var newS_arr = newS.split('').reverse().join('');
    document.getElementById('result_reverse_string').innerHTML = newS_arr;

}
function addCharac(){
  var str = '';
  var data = document.getElementById("input_string_number").value;
  for(var i = 0; i < data.length; i++){
  	if(parseInt(data[i])%2===0){
        	if(parseInt(data[i+1])%2===0){
        str += `${data[i]}-`;
  	         }else{
  	         	str += `${data[i]}`;
  	         }
  	}else{
  		str += `${data[i]}`;
  	}
  }
  document.getElementById("result_charac").innerHTML = str;
}

function kiemtra(){
	var tuDienAnh = ['hello', 'name', 'age'];
	var tuDienViet = ['chào', 'tên', 'tuổi'];
	var data = document.getElementById("nguoiDungNhap").value.toLowerCase();
    for (var i = 0; i < tuDienViet.length; i++){
      if(data == tuDienViet[i] ){
      	document.getElementById("ketQuaTraCuu").innerHTML = tuDienAnh[i];
      }
    }
}
