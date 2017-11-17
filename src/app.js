import './styles/style.scss'
import { Map } from './javascripts/Map.js'
import { eu } from './country-shortnames.js'
import { cartoDark } from './leaflet-tiles.js'
import { populatedPlaces } from './data-queries.js'

var eumap = new Map(
  cartoDark,
  { coordinates: [40.420581,-3.708136], zoom: 6 },
  populatedPlaces
)
eumap.init()

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
