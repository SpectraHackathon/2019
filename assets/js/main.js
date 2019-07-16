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
var title = document.getElementById("modal-title");

var descriptions ={
	braintreevenmo: {
		t: "Braintree + Venmo - Infrastructure",
		r: "None",
		d: "* What is infrastructure? <br>* What is commonly seen in industry, some keywords <br>* Ways to deploy your app, what is relevant to a hackathon <br>* Some good practices -> show spinning up an instance"
	},
	android: {
		t: "Building Intelligent Applications with Android",
		r: "This workshop is beginner friendly! Participants should have an understanding of how code architecture is executed, and have the following installed on their machines:<br>- Android Studio with Java SDK<br>- Microsoft Azure Developer account",
		d: "How difficult is it to build yourself an intelligent application? When you hear “artificial intelligence”, you might think of complex solutions like autonomous drones, self-driving cars, and smart robots - but it doesn’t have to be that complex. In this workshop, you will learn how to build intelligent algorithms into an Android application that detects human faces in an image using Azure Cognitive Services."
	},
	flutter: {
		t: "Introduction to Flutter - iOS/Android",
		r: "Beginners welcome! Bring a computer installed with Android Studio, Xcode, or  any text editor you find comfortable, and either the ability to open a mobile simulator on your machine, or a mobile phone compatible with your laptop. Installing Flutter and other programs needed will be covered in the workshop.",
		d: "Learn an easy way to create a cross-platform mobile application that looks great! At this workshop, you'll learn how to take you hackathon idea and make a beautiful, fast, and productive functional UI in a few easy steps."
	},
	react: {
		t: "Learn web development by building a Pokedex",
		r: "1. Install a text editor, I recommend VS Code<br>2. Install Node.js LTS<br>3. Install Git",
		d: "Learn how web applications work and how to build one using React. You will learn how modern web applications are built, how to use real software engineering tools and best practices. You will leave having built a working Pokedex which can be used as a starting point for your hackathon project."
	},
	game: {
		t: "Game Changing Bonanza hosted by RingCentral",
		r: "None",
		d: "It's time for the bonus round!  Aka Prizes, prizes prizes!  Join us for 30 minutes of hands on learning, networking, and growing your developer skills (while also learning more about RingCentral) while earning your way to awesome prizes including RingCentral swag, collectibles, conference passes, software and e-learning subscriptions, iPads, game consoles, MacBooks, and even an all expenses paid trip to CoderCruise - the RingCentral Developer conference on a cruise ship in the Bahamas!!!  Plus, we'll have a special prize and an honorary badge to show off to the world for whoever earns the most points!"
	},
	pubnub: {
		t: "PubNub - My experience as an intern in Silicon Valley",
		r: "None",
		d: "1) Talk about my experience as a new grad in computer science and working as a Dev Rel Intern at PubNub.<br>2) I will briefly discuss some of the projects I have worked on at PubNub and mainly focus on my current project, a React Native tic tac toe game.<br>3) I will show the audience a demo of my project and pick someone from the audience to play a round of tic tac toe with me.<br>4) The takeaway I want people to have is to know about life after graduation, life as an intern, what Developer Relations is, and to see what can be done with React Native."
	},
	sisu: {
		t: "Sisu - Engineering Product Market Fit",
		r: "None",
		d: "Learn first hand why shipping a product is more than just code, moving fast (and not breaking things) is encouraged, and listening to your customers are key ingredients to building a stellar product and company. In this session, you'll hear directly from Sisu's engineering and design team what really happens behind the scenes at an early startup - the good, the bad, and the messy."
	},
	ios: {
		t: "Intro to iOS",
		r: "",
		d: ""
	},
	scratch: {
		t: "Build A Website From Scratch!",
		r: "Participants will need their own laptops",
		d: "Learn how to build a simple static personal website or company \"coming soon\" page! This beginner-friendly workshop will cover HTML & CSS basics, how to customize design, how to add images and social media links, and how to get the website hosted on the internet!"
	},
	mongodb: {
		t: "Introduction to MongoDB - Hands-On Workshop",
		r: "Please come with a laptop and a text editor. To get a head start, attendees can download Compass, our GUI for MongoDB - https://www.mongodb.com/download-center/compass",
		d: "MongoDB is the BEST way to work with data - and the best way to learn MongoDB is to get your hands dirty. Join our hands-on workshop to get up and running with all aspects of MongoDB. From deploying an Atlas cluster to creating Stitch services, we’ll work through a variety of lab exercises together. Don’t worry if you don’t finish! The free environment you create in this lab will be yours forever."
	},
	nlp: {
		t: "Introduction to Natural Language Processing and Machine Learning in Python",
		r: "Laptop with the <a href=\"https://www.anaconda.com/distribution/\">Anaconda</a> software installed. Basic knowledge of Python/coding will help, but anyone willing to learn is welcome!",
		d: "When you look at a piece of text, what patterns do you see? Maybe you'll notice something about the words that are used or the sentence structure. Natural language processing is a fast-growing, interdisciplinary field that makes use of patterns in textual data, and uses machine learning as a tool to make models and predictions about this data. We'll cover an example of how to use Python tools like Scikit-Learn to classify text and evaluate machine learning models."
	},
	servicenow: {
		t: "Introduction to Enterprise Chatbot",
		r: "Some understanding of the ServiceNow platform will help, but it is not required.",
		d: "Search is the entry point for people interacts with the Web. Have you wondered what will the entry point for entering AI based society?  Many people say it will be a chatbot. In this workshop, you have the opportunity to learn the basics of the Enterprise chatbot and its two key components: NLU and conversation flow designer.  You will also have the chance to watch how a simple conversation flow is built using the ServiceNow platform."
	},
	design: {
		t: "What is Design Thinking?",
		r: "None",
		d: "Of all the Silicon Valley buzzwords, \"design thinking\" is one of the most obtuse. I'll introduce the design process, along with examples of its use, and run a 30-minute journey map activity with participants. Participants should come away with an understanding of what iterative design is and how it can help their work."
	}
}

// When the user clicks on the button, open the modal 
function showDescription(tag) {
  modal.style.display = "block";
  title.innerHTML = descriptions[tag].t
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
