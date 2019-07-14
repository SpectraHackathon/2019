window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-77365611-1');

function initMap() {
  // The location of Uluru
  var makeSchool = {lat: 37.787730, lng: -122.411020};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: makeSchool});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: makeSchool, map: map});
}


// var a = document.getElementById('outerButton')
// var b = document.getElementById('navbarRegister')
// var div = document.getElementById('innerButton')

// function updateTimer() {
// 	const releaseDate = new Date('June 13, 2019 20:30:00 GMT-07:00')
// 	let now = new Date()
// 	let diff = releaseDate - now
// 	let hours = Math.floor(diff / (60 * 60 * 1000))
// 	diff -= (hours * (60 * 60 * 1000))
// 	let minutes = Math.floor(diff / (60 * 1000))
// 	diff -= (minutes * (60 * 1000))
// 	let seconds = Math.floor(diff / 1000)
// 	if (releaseDate > now) {
// 		div.innerHTML = `Apps open in ${hours} hour(s) ${minutes} minute(s) and ${seconds} second(s)`
// 		setTimeout(() => updateTimer(), 1000)
// 	} else {
// 		div.innerHTML = "register now"
// 		a.setAttribute("href", "https://tinyurl.com/gotospectra3")
// 		b.setAttribute("href", "https://tinyurl.com/gotospectra3")
// 	}
// }

// updateTimer()

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var requirement = document.getElementById("modal-requirements");
var description = document.getElementById("modal-description");

var descriptions ={
	braintreevenmo: {
		r: "None",
		d: "* What is infrastructure? <br>* What is commonly seen in industry, some keywords <br>* Ways to deploy your app, what is relevant to a hackathon <br>* Some good practices -> show spinning up an instance"
	},
	android: {
		r: "All participants in this workshop will need a laptop with the latest version of Android Studio installed.",
		d: "How difficult is it to build an intelligent application with no prior experience in AI? When you hear “artificial intelligence”, you might think of complex solutions like self-driving cars, autonomous drones, or robots- but it doesn’t have to be that complex. In this workshop, we’ll build an intelligent Android application using Azure Cognitive Services."
	},
	flutter: {
		r: "None",
		d: "I have created a presentation which will talk about the basics of Flutter, and why it's a good choice for mobile development in hackathons, especially for beginners. After going over key concepts, there will be a quick tutorial to demonstrate those concepts that the participants can follow along with. At the end of the presentation, participants should be comfortable with the basics of how the Flutter framework works, have their development environment setup, and be ready to develop their app without running into conceptual roadblocks."
	},
	react: {
		r: "Participants will need their own laptops",
		d: "This is an introductory React workshop. It assumes the participant has at least half a year of programming experience in any language. Participants will leave the workshop with having written React code which can be extended to their projects."
	},
	game: {
		r: "None",
		d: "It's time for the bonus round!  Aka Prizes, prizes prizes!  Join us for 30 minutes of hands on learning, networking, and growing your developer skills (while also learning more about RingCentral) while earning your way to awesome prizes including RingCentral swag, collectibles, conference passes, software and e-learning subscriptions, iPads, game consoles, MacBooks, and even an all expenses paid trip to CoderCruise - the RingCentral Developer conference on a cruise ship in the Bahamas!!!  Plus, we'll have a special prize and an honorary badge to show off to the world for whoever earns the most points!"
	}

}

// When the user clicks on the button, open the modal 
function showDescription(tag) {
	console.log(tag)
  modal.style.display = "block";
  requirement.innerHTML = descriptions[tag].r
  description.innerHTML = descriptions[tag].d
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
