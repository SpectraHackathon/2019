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