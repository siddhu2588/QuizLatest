


function validate(){
var response = g-recaptcha.getResponse();

if(response.length==0)
// document.getElementById("cc").innerHTML = "Incorrect Captcha"
alert("captcha not verified");

else
// document.getElementById("cc").innerHTML = "Correct Captcha"
alert("yayy, captcha verified");
}