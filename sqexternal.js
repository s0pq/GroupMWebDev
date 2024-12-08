function radioSubmit(){
	
}
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
function random(){
	let r = Math.floor(Math.random()*100000000) + 90000000;
	let page = document.getElementById("commuter");
	page.innerHTML = r;
}
function hidePara(){
	var x = document.getElementById("sqparahide");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}
function showArray(){
	myArray = new Array("passionate.", "concerned.", "educated.", "cool.", "very very very very well-informed.", "contributing. To society.", "steadfast in our aproach!");
	randIndex = Math.floor(Math.random()*7);
	document.getElementById("display").innerHTML = "Our team is... "+myArray[randIndex];
}