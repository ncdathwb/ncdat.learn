function redSliderOnChange() {
	var red_value   = document.getElementById('myRange_1').value;
	var green_value = document.getElementById('myRange_2').value;
	var blue_value  = document.getElementById('myRange_3').value;
	var rgb_color   = `rgb(${red_value}, ${green_value}, ${blue_value})`;
	document.getElementById("background").style.backgroundColor = rgb_color;
	document.getElementById("msg_red").innerHTML = red_value;
	document.getElementById("msg_green").innerHTML = green_value;
	document.getElementById("msg_blue").innerHTML= blue_value;
 }

