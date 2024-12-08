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

document.getElementById('generateFactBtn').addEventListener('click', generateRandomFact);

const facts = [
    "There is 45% more 20-minute neighbourhoods in the last decade!",
    "Only 10% of the world's homes are in a 20-minute neighbourhood!",
    "I in fact DO NOT live in a 20-minute neighbourhood.",
    "Finland has the most 20-minute neighbourhoods!",
    "London has a very small amount of 20-minute neighbourhoods!",
	"All of these facts are completely made up!"
];

function generateRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
    document.getElementById('factDisplay').textContent = randomFact;
}




let modalbutton = document.getElementById('modalbut');
let modalcontainer = document.getElementById('container');
let closemodal = document.getElementById('closemodal');

modalbut.addEventListener('click', function(){
	
	modalcontainer.style.display = 'block';
});

closemodal.addEventListener('click', function(){
	container.style.display ='none';
});
