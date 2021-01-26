

function registration()
	{ 
		
	var dname= document.getElementById("name").value;
	var email= document.getElementById("email").value;
	var phno= document.getElementById("phone").value;
	var pwd= document.getElementById("pwd").value;			
	var cpwd= document.getElementById("cpwd").value;
	
	
	//email id expression code
	var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
	var letters = /^[A-Za-z\ ]+$/;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
	var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;


	
		if(dname=='')
		{
			alert('Please enter your name');
			return false;
		}
		else if(!letters.test(dname))
		{
			alert('Name field required only alphabet characters');
			return false;
		}
		else if(email=='')
		{
			alert('Please enter your email id');
			return false;
		}
		else if (!filter.test(email))
		{
			alert('Invalid email');
			return false;
		}
		else if(phno=='')
		{
			alert('Please enter phone number');
			return false;
		}
		else if(!phoneno.test(phno))
        {
			alert('Invalid Number');
			return false;
        }
		else if(pwd=='')
		{
			alert('Please enter Password');
			return false;
		}
		else if(cpwd=='')
		{
			alert('Enter Confirm Password');
			return false;
		}
		else if(!pwd_expression.test(pwd))
		{
			alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
			return false;
		}
		else if(pwd != cpwd)
		{
			alert ('Password not Matched');
			return false;
		}
		else if(pwd.length < 8)
		{
			alert ('Password minimum length is 8');
			return false;
		}

		else
		{				                            
			alert("You have successfully Signed up,  Please Login using your credintials, Redirecting to Login page");
           		                            
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
	 if(pwd.value.length>6 && pwd.value.length<9)
 	{
		pwd.style.borderColor = "orange";

	 }
	 if(pwd.value.length>11)
 	{
		pwd.style.borderColor = "green";
	 }
		
		
}	