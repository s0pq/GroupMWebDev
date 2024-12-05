// form validation - by WS

function contactUs() {
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

// List of stations from Heuston to Portlaoise
const stations = [
    "Dublin Heuston", 
    "Park West & Cherry Orchard", 
    "Clondalkin Fonthill", 
    "Kishoge", 
    "Adamstown", 
    "Hazelhatch & Celbridge", 
    "Sallins & Naas", 
    "Newbridge", 
    "Kildare", 
    "Monasterevin", 
    "Portarlington", 
    "Portlaoise"
];

// Function to display a random station
function showRandomStation() {
    const randomIndex = Math.floor(Math.random() * stations.length);
    console.log("Selected station index:", randomIndex); // Debugging log
    console.log("Selected station:", stations[randomIndex]); // Debugging log 
    document.getElementById("station").textContent = stations[randomIndex];
}

// Check if button is clicked
document.getElementById("randomButton").onclick = function() {
    console.log("Button clicked!"); // Debugging log - if the button works but no station is displayed, this will show up in the console
    showRandomStation(); // displays the station
};

function changeText() { //sets up the changeText function
  document.getElementById("message").textContent = "Sucks to be you dude."; //this is the message that will display when the button is pressed
}

function getZappedIdiot() { //sets up the getZappedIdiot function 
	const element = document.getElementById("vibeCheck");
	element.remove(); //the paragraphs with the vibeCheck id will be removed when the button is clicked.
}

//randomisation which i have no idea what we'll do for that but we'll figure it out