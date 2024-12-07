function contactUs() { /*this code for the form was made by Wiktoria */
	let formy = true; //formy is our flag 
	let msg = "Form not completed: "; // if a field is empty, this message will display
	//first name validation
	if(document.getElementById("fn").value == "") {
		msg+="You must enter your First Name. "; //we build the msg
		formy = false; //the flag is now false
	}
	//surname validation
	if(document.getElementById("sn").value == "") {
		msg+="You must enter your Surname. "; //we build the msg
		formy = false; //the flag is now false
		
	}
	//email validation
	if(document.getElementById("email").value == "") {
		msg+="You must enter your email address. ";
		formy = false;
	}else if(document.getElementById("email").value != "") {
		inputE = document.getElementById("email").value;
		let symbol = inputE.indexOf("@");
		if(symbol < 1) {
			formy = false;
			msg+= "Invalid email adress. ";
		}
	}
	//mobile validation 
	if(document.getElementById("phone").value == 0) {
		msg+="You must enter your mobile number. ";
		formy = false;
	}
	
	//if formy ==  false, display the texts given
	if(!formy) {
		document.getElementById("details").innerHTML = msg;
	}
	return formy;
}
function swap(){
			//go to the id of imgSwap = the img tag
			//setAttribute of src to point to the new image
				document.getElementById("imgSwap").setAttribute("src", "img/sq_self_portrait.jpg");
}
