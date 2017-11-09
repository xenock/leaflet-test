import './styles/style.scss'
import { Map } from './javascripts/Map.js'
import { eu } from './country-shortnames.js'
import { cartoDark } from './leaflet-tiles.js'
import { populatedPlaces } from './data-queries.js'

var eumap = new Map(cartoDark, { coordinates: [40.420581,-3.708136], zoom: 6 })
eumap.init()

var geojsonMarkerOptions = {
  radius: 8,
  fillColor: "#ff7800",
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
