function initMap(){
  var laboratoriaLima = {lat: -12.1191427, lng: 77.0349046};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: laboratoriaLima
  });

  var markLaboratoria = new google.maps.Marker({
    position: laboratoriaLima,
    map: map
  });

  function successFunction(myPosition){
    var myLat = myPosition.coords.latitude;
    var myLon = myPosition.coords.longitude;
    var myLocation = new google.maps.Marker({
      position: {lat: myLat, lng: myLon},
      map: map
    });
    map.setZoom(18);
    map.setCenter({lat: myLat, lng: myLon});
  }
  function findMe(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successFunction);
    } else {
      x.innerHTML = "La geolocalización no es compatible con este navegador.";
    }
  }
  document.getElementById('btn-find-me').addEventListener('click', findMe);
}
