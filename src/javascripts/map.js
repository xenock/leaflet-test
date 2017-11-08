function Map(tileSrc, initMapSettings){
  this.tileSrc = tileSrc
  this.coordinates = initMapSettings.coordinates
  this.zoom = initMapSettings.zoom
  this._init()
}

Map.prototype._init = function(){
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
