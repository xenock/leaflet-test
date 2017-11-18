function Map(tile, initValues, query, markerOptions){
  this.tileSrc = tile || 'http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
  this.query = query
  this.coordinates = initValues.coordinates
  this.zoom = initValues.zoom
  this.markerOptions = markerOptions
}

Map.prototype.init = function(){
  this._initMap()
  this._setTileLayer()
  this._getData()
}

Map.prototype._initMap = function(){
  this.mymap = L.map('mapid', {render: L.svg()}).setView(this.coordinates, this.zoom)
}

Map.prototype._setTileLayer = function(){
  L.tileLayer(this.tileSrc, {maxZoom: 18,id: 'mapbox.dark'}).addTo(this.mymap)
}

Map.prototype._getData = function(){
  var that = this
  fetch(this.query)
    .then(function(response){
      if(response.status !== 200){
        console.log('problem ', response.status)
        return
      }
      response.json().then(function(data){
        that.capitals = that._loadData(data)
        that.capitals.addTo(that.mymap)
      })
    })
    .catch(function(err){
      console.log('Fetch err ', err)
    })
}

Map.prototype._loadData = function(data){
  var that = this
  return L.geoJSON(data, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, that.markerOptions)
    },
    filter: this._filterCapitals,
    onEachFeature: this._bindTooltips
  })
}

Map.prototype.changeMarkerFill = function(markerOptions){
  this.mymap.removeLayer(this.capitals)
  this.markerOptions.radius = markerOptions
  this._getData()
}

Map.prototype.changeMarkerStroke = function(markerOptions){
  this.mymap.removeLayer(this.capitals)
  this.markerOptions.weight = markerOptions
  this._getData()
}

Map.prototype._filterCapitals = function(feature, layer) {
  return feature.properties.featurecla === "Admin-0 capital"
}

Map.prototype._bindTooltips = function(feature, layer){
  layer.bindTooltip(
    '<h1>'+feature.properties.name+'</h1>'+
      '<p>Rank max: '+feature.properties.rank_max+'</p>'+
      '<p>Rank min: '+feature.properties.rank_min+'</p>'+
      '<p>Population max: '+feature.properties.pop_max+'</p>'+
      '<p>Population min: '+feature.properties.pop_min+'</p>'+
      '<p>Population other: '+feature.properties.pop_other+'</p>'
  )
}

Map.prototype.toggleTooltips = function(tooltipEnabled){
  var tooltipLayer = document.querySelectorAll('.leaflet-tooltip-pane')[0]
  tooltipLayer.style = !tooltipEnabled? 'display: none' : ''
}

module.exports = { Map }
