function myFunction() {
	var arr = [];
	for (var i = 0; i < 10; i++){
		arr.push(Math.floor(Math.random() * (50 -10))+10);
	}
    document.querySelector('#show').innerText = `arr = [${arr}];`;
    document.getElementById("show2").innerHTML = `arrPow = [${arr.map(value => Math.pow(value,2))}]`;
}
myFunction();


    var obj = document.querySelector('#btn');
obj.addEventListener('click',()=>{
	var dataInput = document.querySelector('#data').value;
    var arr = [];
	for (var i = 0; i < 10; i++){
		arr.push(Math.floor(Math.random() * (50 -10))+10);
	}
	document.getElementById("showArrayNew").innerHTML = `arrFindX = [${arr}];`;
	var result = arr.includes(parseInt(dataInput));
	if(result){
      document.getElementById("show3").innerHTML = `Có ${dataInput} trong mảng!`;
	}else{
	  document.getElementById("show3").innerHTML = `Không có ${dataInput} trong mảng!`;
	}

});


var obj2 = document.querySelector('#btn_min_max');
obj2.addEventListener('click',()=>{
    var arr = [];
	for (var i = 0; i < 10; i++){
		arr.push(Math.floor(Math.random() * (50 -10))+10);
	}
	var dataInputMin = parseInt(document.querySelector('#min').value);
	var dataInputMax = parseInt(document.querySelector('#max').value);
	var kq_blean = arr.some(checkMinMax);
    function checkMinMax(arr) {
	  return (arr > dataInputMin && arr < dataInputMax);
	}	
	document.getElementById("array").innerHTML =`arr = [${arr}];`;					
    if(kq_blean){
    	document.getElementById("show4").innerHTML = `Có phần tử trong mảng xuất hiện trong khoảng ${dataInputMin} - ${dataInputMax}`;
    }else{
        document.getElementById("show4").innerHTML = `Không có phần tử trong mảng xuất hiện trong khoảng ${dataInputMin} - ${dataInputMax}`;
    }
});

