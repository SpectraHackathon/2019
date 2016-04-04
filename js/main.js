function init() {
  $('.navbar-nav li').click(function() {
     $(".navbar-nav li").removeClass("active");
     $(this).addClass("active");
  });
  initializeMap();
}

function initializeMap() {
  var siliconValley = new google.maps.LatLng(37.3885531,-122.0766911);
  var mapContainer = document.getElementById("map");
  var mapOptions = {
    center: siliconValley,
    scrollwheel: false,
    zoom: 11
  };
  var map = new google.maps.Map(mapContainer, mapOptions);
  var marker = new google.maps.Marker({
      map: map,
      position: siliconValley
    });
}

$(document).ready(init);