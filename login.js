document.getElementById("loginForm").addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

if(email==="" || password===""){

alert("Please fill all fields");

return;

}

alert("Login successful (Firebase baad me connect karenge)");

window.location.href="index.html";

});
