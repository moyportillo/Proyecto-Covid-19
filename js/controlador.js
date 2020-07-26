/*funciones para localizaciones*/
function findMe() {
    var output = document.getElementById('map');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(localizacion, error);
    } else {
        output.innerHTML = "<p>Su navegador no soporta Geolocalización</p>";
    }
}

function localizacion(posicion) {
    var latitude = posicion.coords.latitude;
    var longitude = posicion.coords.longitude;
}

function error() {
    output.innerHTML = "<p>No se pudo obtener tu ubicación</p>";
}

function crearMapa() {
  var map = new ol.Map({
      layers: [
          new ol.layer.Tile({
              source: new ol.source.OSM()
          })
      ],
      target: 'map',
      view: new ol.View({
          center: [0, 0],
          zoom: 2
      })
  });
  var view = new ol.View({
      center: [41.56, -4.63],
      zoom: 7
  });
  map.addControl(new ol.control.ZoomSlider());
}

document.addEventListener("DOMContentLoaded", page_load);

function page_load(e){

  document.getElementById("map").innerHTML = 
    crearMapa();
}




