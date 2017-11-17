function Map(tile, initValues, query){
  this.tileSrc = tile || 'http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
  this.query = query
  this.coordinates = initValues.coordinates || [0,0]
  this.zoom = initValues.zoom || 0
}

Map.prototype.init = function(geojsonMarkerOptions){
  this._initMap()
  this._setTileLayer()
  this._getData(geojsonMarkerOptions)
}

Map.prototype._initMap = function(){
  this.mymap = L.map('mapid', {render: L.svg()}).setView(this.coordinates, this.zoom)
}

Map.prototype._setTileLayer = function(){
  L.tileLayer(this.tileSrc, {maxZoom: 18,id: 'mapbox.dark'}).addTo(this.mymap)
}

Map.prototype._getData = function(geojsonMarkerOptions){
  var that = this
  fetch(this.query)
    .then(function(response){
      if(response.status !== 200){
        console.log('problem ', response.status)
        return
      }
      response.json().then(function(data){
        that.capitals = that._loadData(data, geojsonMarkerOptions)
        that.capitals.addTo(that.mymap)
      })
    })
    .catch(function(err){
      console.log('Fetch err ', err)
    })
}

Map.prototype._loadData = function(data, geojsonMarkerOptions){
  return L.geoJSON(data, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, geojsonMarkerOptions)
    },
    filter: this._filterCapitals,
    onEachFeature: this._bindTooltips
  })
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
module.exports = { Map }
