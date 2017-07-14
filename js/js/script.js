function validateEmail(){
	var email=document.getElementById("eml").value;
	if(email==="jimugochukwu@gmail.com"){
		document.getElementById('err_eml').innerHTML="*email already taken";
	}
	else{
		document.getElementById('err_eml').innerHTML="";
	}
}
function validateTel(){
	var tel=document.getElementById('tel').value;
	if ( (tel.length == 13 || tel.length==11) && tel.match(/[a-z]/i) != true) {
		document.getElementById('er_tel').innerHTML="";
	}
	else {
		document.getElementById('er_tel').innerHTML="*enter valid number";
		}
}
function validateUsername(){
	var username=document.getElementById("usr").value;
	if (username==="jimnaztic") {
		document.getElementById('err_usr').innerHTML="username already exist";
	}
	else{
		document.getElementById('err_usr').innerHTML="";
	}
}
function validatePassword(){
	var psd1=document.getElementById('psd1').value;
	if (?=.*[0-9].*[0-9]) {
		document.getElementById('err_psd1').innerHTML="password correct";
	}
}
else {
	document.getElementById('err_psd1').innerHTML=""
}

