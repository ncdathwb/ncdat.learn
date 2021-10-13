function yesClick() {
	alert('Chuẩn!!!');
}
function noClick(){
	//lấy toạ độ của random bằng cách random x chiều cao rộng của trình duyệt
	var x = Math.round(Math.random()*window.innerWidth);
	var y = Math.round(Math.random()*window.innerHeight);
    // lấy đối tượng bằng DOM
    var obj_no_btn = document.getElementById('no_btn');
    obj_no_btn.style.right = x+'px';
    obj_no_btn.style.top = y+'px'; 
}



