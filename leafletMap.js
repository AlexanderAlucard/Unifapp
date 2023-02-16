const Hhtml_script = `
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
</head>
<body>

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
crossorigin=""/>

<!-- Make sure you put this AFTER Leaflet's CSS -->
<script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"
integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg="
crossorigin=""></script>

<style>

#map { height: 650px; }

</style>

<main>
<div id="map"></div>
</main>

<script>
const map = L.map('map'); 

// Initializes map
map.setView([-0.002893, -51.083855], 18); 

// Sets initial coordinates and zoom level
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map); 

var popup = L.popup()
    .setLatLng([-0.002893, -51.083855])
    .setContent("Teste do popup.")
    .openOn(map);


    function onMapClick(e) {
      popup
          .setLatLng(e.latlng)
          .setContent("You clicked the map at " + e.latlng.toString())
          .openOn(map);
  }
    
  
  map.on('click', onMapClick);

  L.marker([-0.002944, -51.084273]).addTo(map).bindPopup("I am a green leaf.");
</script>
  
</body>
</html>

`

export default Hhtml_script