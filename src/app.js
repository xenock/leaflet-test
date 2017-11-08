import './styles/style.scss'
var mymap = L.map('mapid', {render: L.svg()}).setView([40.420581,-3.708136], 6)
var eu = ["BE","BG","CZ","DK","DE","EE","IE","EL","ES","FR","HR","IT","CY","LV","LT","LU","HU","MT","NL","AT","PL","PT","RO","SI","SK","FI","SE","UK"]
var geojsonMarkerOptions = {
  radius: 8,
  fillColor: "#ff7800",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
}
fetch('https://xavijam.carto.com/api/v2/sql?q=SELECT%20*%20FROM%20ne_10m_populated_places_simple&format=GeoJSON')
  .then(function(response){
    if(response.status !== 200){
      console.log('problem ', response.status)
      return
    }
    response.json().then(function(data){
      L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
          return L.circleMarker(latlng, geojsonMarkerOptions);
        },
        filter: function(feature, layer) {
          return eu.includes(feature.properties.iso_a2)
        }
      }).addTo(mymap)
    })
  })
  .catch(function(err){
    console.log('Fetch err ', err)
  })


L.tileLayer(
  'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',
  {
	  maxZoom: 18,
	  id: 'mapbox.streets'
  }
).addTo(mymap)
