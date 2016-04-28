function init() {
  $('.navbar-nav li').click(function() {
     $(".navbar-nav li").removeClass("active");
     $(this).addClass("active");
  });
  initializeMap();
}

function initializeMap() {
  var siliconValley = new google.maps.LatLng(37.6279340,-122.42666);
  var mapContainer = document.getElementById("map");
  var mapOptions = {
    center: siliconValley,
    scrollwheel: false,
    zoom: 15
  };
  var map = new google.maps.Map(mapContainer, mapOptions);
  var marker = new google.maps.Marker({
      map: map,
      position: siliconValley
    });
}

$(document).ready(init);

