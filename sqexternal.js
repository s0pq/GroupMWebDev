function contactUs() { /*this code for the form was made by Wiktoria, used on page 2 */
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
function random(){   //this is for showing an x amount of commuters on page 1
	let r = Math.floor(Math.random()*100000000) + 90000000;  //the numbers are randomised between 90000000 and 100000000
	let page = document.getElementById("commuter");
	page.innerHTML = r;
}
function mouseOver(){  //this is for when the move moves over a paragraph on page 2
	document.getElementById("sqmouseOver").innerHTML ="Sorry! Accidentally leaked government files!";  //this replaces the paragraph when the mouse moves over it
}
function hidePara(){  //this is for hiding and showing the paragraph on page 1, taken from w3 schools
	var x = document.getElementById("sqparahide");
	if (x.style.display === "none") {
		x.style.display = "block"; //allows the paragraph to show and hide forever
	} else {
		x.style.display = "none";
	}
}
function showArray(){ //this is the array from page 2, will print out a random block from the array
	myArray = new Array("passionate.", "concerned.", "educated.", "cool.", "very very very very well-informed.", "contributing. To society.", "steadfast in our aproach!"); //all the elements from the array
	randIndex = Math.floor(Math.random()*7); //randomises between the 7 of them
	document.getElementById("display").innerHTML = "Our team is... "+myArray[randIndex]; // displays a random array with each click
}