function init() {
  $('.navbar-nav li').click(function() {
     $(".navbar-nav li").removeClass("active");
     $(this).addClass("active");
  });
  initMap();
}

function initMap() {
  // var siliconValley = new google.maps.LatLng(37.6279340,-122.42666);
  var isDraggable = $(document).width() > 480 ? true : false;
  var siliconValley = {lat:37.778816, lng:-122.397592};
  var mapContainer = document.getElementById("map");
  var mapOptions = {
    center: siliconValley,
    scrollwheel: false,
    zoom: 14,
    draggable: isDraggable
  };
  var map = new google.maps.Map(mapContainer, mapOptions);
  var marker = new google.maps.Marker({
      map: map,
      position: siliconValley,
    });
  marker.setMap(map);
}

$(document).ready(init);