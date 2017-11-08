function Map(tile, initValues){
  this.tileSrc = tile || 'http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
  this.coordinates = initValues.coordinates || [0,0]
  this.zoom = initValues.zoom || 0
}

Map.prototype.init = function(){
  this._initMap()
  this._setTileLayer()
}

Map.prototype._initMap = function(){
  this.mymap = L.map('mapid', {render: L.svg()}).setView(this.coordinates, this.zoom)
}

Map.prototype._setTileLayer = function(){
  L.tileLayer(this.tileSrc, {maxZoom: 18,id: 'mapbox.streets'}).addTo(this.mymap)
}

Map.prototype.loadData = function(data, geojsonMarkerOptions, locations){
  L.geoJSON(data, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, geojsonMarkerOptions)
    },
    filter: function(feature, layer) {
      return locations.includes(feature.properties.iso_a2)
    }
  }).addTo(this.mymap)
}
module.exports = { Map }
