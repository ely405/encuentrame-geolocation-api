function initMap(){
  var laboratoriaLima = {lat: -12.1191427, lng: -77.0349046};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: laboratoriaLima
  });

  var markLaboratoria = new google.maps.Marker({
    position: laboratoriaLima,
    map: map
  })
}

function successFunction(){
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
}

function findMe(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
    } else {
        x.innerHTML = "La geolocalización no es compatible con este navegador.";
    }
}
