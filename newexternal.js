function contactUs() {
	let formy = true; //formy is our flag 
	let msg = "Form not completed: ";
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

document.getElementById('generateFactBtn').addEventListener('click', generateRandomFact); /* detects when a click is made*/

const facts = [ /* is a arrey */
    "There is 45% more 20-minute neighbourhoods in the last decade!",
    "Only 10% of the world's homes are in a 20-minute neighbourhood!",
    "I in fact DO NOT live in a 20-minute neighbourhood.",
    "Finland has the most 20-minute neighbourhoods!",
    "London has a very small amount of 20-minute neighbourhoods!",
	"All of these facts are completely made up!"
];

function generateRandomFact() { 
    const randomIndex = Math.floor(Math.random() * facts.length); /* generates a random indext based on the length of the array*/
    const randomFact = facts[randomIndex]; /* selects a random fact */
    document.getElementById('factDisplay').textContent = randomFact; /* replaces the fact display with a random selected fact */
}

function displayDate() {
    const elements = document.querySelectorAll(".whattime"); /* selects whattime elements */
    elements.forEach((element) => { /* loops through the whattime elements */
        element.innerHTML = Date(); /* finds and sets the current date and time*/
    });
} 



let modalbutton = document.getElementById('modalbut');
let modalcontainer = document.getElementById('container');
let closemodal = document.getElementById('closemodal');

modalbut.addEventListener('click', function(){ /* detects a click action */
	
	modalcontainer.style.display = 'block'; /* makes the modal container visible */
});

closemodal.addEventListener('click', function(){
	container.style.display ='none';
}); /* closes function and event listener */

document.getElementById('youcantseethis').textContent = 'New Text';