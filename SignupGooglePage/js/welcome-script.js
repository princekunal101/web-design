let txt = document.getElementById('welcome-txt');
let info_txt = document.getElementById('user-info');

var data = window.location.search;
var params = new URLSearchParams(data);

var userName = params.get("username");
var userEmail = params.get("email");
var userPswd = params.get("password");

console.log(params.get("username"));
console.log(params.get("email"));

txt.innerHTML += userName + "! " + "&#129505;";
info_txt.innerHTML += "<br>" + "Email: "+ userEmail +"<br>" + "Password: "+ userPswd;