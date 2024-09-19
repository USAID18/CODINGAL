function validdate(e)
{
    e.preventDefault();

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

var msg=document.getElementById("message")

let message=''; 
if (email ==='')
{
    message= 'please enter email.';
}
else if(password ===''){
    message='enter pls.';
 }


else {
    message='login!s';
}
msg.innerText=message;
}