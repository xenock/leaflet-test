import './styles/style.scss'
import { Map } from './javascripts/Map.js'
import { eu } from './country-shortnames.js'
import { cartoDark } from './leaflet-tiles.js'
import { populatedPlaces } from './data-queries.js'

var eumap = new Map(cartoDark, { coordinates: [40.420581,-3.708136], zoom: 6 })
eumap.init()

var geojsonMarkerOptions = {
  radius: 10,
  fillColor: "#A52A2A",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
}

fetch(populatedPlaces)
  .then(function(response){
    if(response.status !== 200){
      console.log('problem ', response.status)
      return
    }
    response.json().then(function(data){
      eumap.loadData(data, geojsonMarkerOptions, eu)
    })

  })
  .catch(function(err){
    console.log('Fetch err ', err)
  })

window.onload = function(){
  var color = document.getElementById('painting-style__fill')
  var stroke = document.getElementById('painting-style__stroke')
  var labels = document.getElementById('painting-style__labels')
  var tooltipLayer = document.querySelectorAll('.leaflet-tooltip-pane')[0]

  color.addEventListener('change', function(){
    var selectedColor = color.options[color.selectedIndex].value
    var points = document.querySelectorAll('path.leaflet-interactive')
    points.forEach(function(point){
      point.setAttribute('fill', selectedColor)
    })
  })

  stroke.addEventListener('change', function(){
    var selectedStroke = stroke.options[stroke.selectedIndex].value
    var points = document.querySelectorAll('path.leaflet-interactive')
    points.forEach(function(point){
      point.setAttribute('stroke-width', selectedStroke)
    })
  })

  labels.addEventListener('change', function(){
    tooltipLayer.style = !labels.checked ? 'display: none' : ''
  })
}
