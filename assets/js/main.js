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


var a = document.getElementById('outerButton')
var b = document.getElementById('navbarRegister')
var div = document.getElementById('innerButton')
var now = new Date()
var closingDate = new Date('July 17, 2019 23:59:00 GMT-07:00')
if (now >= closingDate) {
	a.setAttribute("href", "#")
	b.setAttribute("href", "#")
	div.innerHTML = "registation closed"
}

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

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var requirement = document.getElementById("modal-requirements");
var description = document.getElementById("modal-description");
var title = document.getElementById("modal-title");

var descriptions ={
	braintreevenmo: {
		t: "Braintree - What is Infrastructure?",
		r: "I will be working with the technologies I am most familiar with. Please have created a free <a href=\"https://aws.amazon.com/free\">AWS account</a> and a <a href=\"https://github.com/\">Github account</a>, with git, <a href=\"https://www.terraform.io/\">Terraform</a>, and <a href=\"https://www.packer.io/\">Packer</a> installed locally.<br><br>It shouldn't be necessary to develop in a Linux environment, but I strongly recommend users who have never developed in such an operating system to try it out at some point. The example repository will use AWS as a cloud infrastructure host but it is possible to modify this example to work with any other provider like Google Cloud / DigitalOcean / IBM BlueMix / etc. since Terraform supports those providers.<br><br>Also note the exercise is totally optional, you can achieve what you want using Heroku / some other similar service too -- I just think understanding how to work on a remote host is more valuable for a project you want to maintain longer-term (which is what you'd do at a company!)",
		d: "This workshop aims to give the audience an overview of what infrastructure is, what levels of the stack you'll see in the wild at different sized companies and the types of problems \"infrastructure\" generally refers to, a comparison of different types of technologies so some job listings will be more understandable, and how that is relevant for hackathons in general via an exercise.<br><br>The exercise will be an example repository that sets up an AWS EC2 instance with an example backend app deployed, with a frontend hosted on Github Pages so you get a free domain for your hackathon demo.<br><br>Recommended reading for the graduating seniors interested in careers in infrastructure: <a href=\"https://landing.google.com/sre/books/\">Google's SRE book</a>"
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
		d: "Learn how web applications work and how to build one using <b>React.</b> You will learn how modern web applications are built, how to use real software engineering tools and best practices. You will leave having built a working Pokedex which can be used as a starting point for your hackathon project."
	},
	game: {
		t: "Game Changing Bonanza hosted by RingCentral",
		r: "None",
		d: "It's time for the bonus round!  Aka Prizes, prizes prizes!  Join us for 30 minutes of hands on learning, networking, and growing your developer skills (while also learning more about RingCentral) while earning your way to awesome prizes including RingCentral swag, collectibles, conference passes, software and e-learning subscriptions, iPads, game consoles, MacBooks, and even an all expenses paid trip to CoderCruise - the RingCentral Developer conference on a cruise ship in the Bahamas!!!  Plus, we'll have a special prize and an honorary badge to show off to the world for whoever earns the most points!"
	},
	pubnub: {
		t: "PubNub - My experience as an intern in Silicon Valley",
		r: "This workshop is for all levels! You just need a laptop and to complete the following things:<br>a. A text editor of your choice (I recommend VS Code).<br>b. Follow the ‘Getting Started’ documentation to set up React Native on your machine (<a href=\"https://facebook.github.io/react-native/docs/getting-started.html\">https://facebook.github.io/react-native/docs/getting-started.html</a>). <br>c. Install Git if you have a Windows machine. Mac users can use the terminal. <br>d. Clone the following repo: <a href=\"https://github.com/ocastroa/react-native-tictactoe\">https://github.com/ocastroa/react-native-tictactoe</a>",
		d: "<b>Oscar –</b> What’s it like to be an intern in Developer Relations? I will briefly talk about my personal experience working as a Developer Relations Intern at PubNub. I will go over some projects I have worked on, with an emphasis on my latest project: A realtime React Native tic tac toe game. I will do a live demo of the game and you can play along too. In this workshop, you will learn about being a Developer Relations intern and how to make a realtime app!<br><b>Craig –</b> Two main subjects: one being a discussion on how Craig navigated becoming a part of the SF tech scene without a CS degree, the second discusses a discovered passion of QA/Engineering."
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
		d: "Learn how to build a simple static personal website or company \"coming soon\" page! This beginner-friendly workshop will cover <b>HTML & CSS basics</b>, how to customize design, how to add images and social media links, and how to get the website hosted on the internet!"
	},
	mongodb: {
		t: "Introduction to MongoDB - Hands-On Workshop",
		r: "Please come with a laptop and a text editor. To get a head start, attendees can download Compass, our GUI for MongoDB - <a href=\"https://www.mongodb.com/download-center/compass\">https://www.mongodb.com/download-center/compass</a>",
		d: "MongoDB is the BEST way to work with data - and the best way to learn MongoDB is to get your hands dirty. Join our hands-on workshop to get up and running with all aspects of MongoDB. From deploying an Atlas cluster to creating Stitch services, we’ll work through a variety of lab exercises together. Don’t worry if you don’t finish! The free environment you create in this lab will be yours forever."
	},
	nlp: {
		t: "Introduction to Natural Language Processing and Machine Learning in Python",
		r: "-Laptop with the <a href=\"https://www.anaconda.com/distribution/\">Anaconda</a> software installed. <br>-Basic knowledge of Python/any programming language will help, but anyone willing to learn is welcome! <br>-Familiarity with basic terminal commands ",
		d: "When you look at a piece of text, what patterns do you see? Maybe you'll notice something about the words that are used or the sentence structure. Natural language processing is a fast-growing, interdisciplinary field that makes use of patterns in textual data, and uses machine learning as a tool to make models and predictions about this data. We'll cover an example of how to use Python tools like Scikit-Learn to classify text and evaluate machine learning models."
	},
	servicenow: {
		t: "Introduction to Enterprise Chatbot",
		r: "Some understanding of the ServiceNow platform will help, but it is not required.",
		d: "Search is the entry point for people interacts with the Web. Have you wondered what will the entry point for entering AI based society?  Many people say it will be a chatbot. In this workshop, you have the opportunity to learn the basics of the Enterprise chatbot and its two key components: NLU and conversation flow designer.  You will also have the chance to watch how a simple conversation flow is built using the ServiceNow platform."
	},
	design: {
		t: "What is Design Thinking?",
		r: "No design experience required. Bring an open mind and curiosity!",
		d: "Of all the Silicon Valley buzzwords, \"design thinking\" is one of the most obtuse. I'll introduce the design process, along with examples of its use, and run a 30-minute journey map activity with participants. Participants should come away with an understanding of what iterative design is and how it can help their work."
	},
	jupyter: {
		t: "Introduction to Data Wrangling with Jupyter Notebooks",
		r: "Bring your curiosity and laptops to follow along. All the material will be provided in the workshop and also available on github.",
		d: "This is an introductory session on exploring and analyzing data using Python, Pandas and Jupyter Notebooks. We will go over:<br>- how to obtain/read a data file using python in Watson Studio<br>- how to clean noise in data<br>- selecting and querying data<br>- reshaping and filtering data<br>- grouping data into a hierarchy<br>- simple graphing of data<br><br>This is a good session for you if you are <br>- an aspiring data scientist<br>- frequently working with excel files and want another approach to dissect data<br>- a SQL developer looking to get into programming<br>- curious about data in general!"
	},
	dom: {
		t: "DOM manipulations using JavaScript",
		r: "Beginners encouraged, but please come with basic HTML & CSS knowledge as well as rough understanding of JS functionality like functions and variables.",
		d: "Learn how JavaScript ties together with HTML and CSS by manipulating the DOM. What is the DOM, you might ask? Well, visit this workshop and find out! ^-^ We’ll be going over different events fired by the browser when a user interacts with a web page, like what happens when a user scrolls down or clicks on a button. Together we’ll build a drum kit that is going to make certain sounds according to a key user presses on their keyboard. Moreover, we’ll take a close look on OnePlus’ website to identify the use of what was learned in the real world."
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
