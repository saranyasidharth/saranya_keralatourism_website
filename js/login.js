
function registration()
{ 

var email= document.getElementById("email").value;
var pwd= document.getElementById("pwd").value;			


var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;

var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  

    if(email=='')
    {
        alert('Please enter your email id');
        return false;
    }
    else if (!filter.test(email))
    {
        alert('Invalid email');
        return false;
    }

    else if(pwd=='')
    {
        alert('Please enter Password');
        return false;
    }
   
    else if(!pwd_expression.test(pwd))
    {
        alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
        return false;
    }
   else if(pwd.length < 8)
    {
        alert ('Password minimum length is 8');
        return false;
    }

    else
    {		
            alert("You have logged in succesfully, Redirecting to District page");
           		                            
            return true;
    }
}
function pasval()
{
var pwd= document.getElementById("pwd");	
 if(pwd.value.length<=6)
 {
    pwd.style.borderColor = "red";
    pwd.border="thick 5px solid";
 }
 else if(pwd.value.length>6 && pwd.value.length<9)
 {
    pwd.style.borderColor = "orange";

 }
 else if(pwd.value.length>11)
 {
    pwd.style.borderColor = "green";
 }
    
    
}	