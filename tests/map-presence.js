module.exports = {
  'Map elements presence': function(client){
    client.url('http://localhost:9000')
    client.expect.element('.leaflet-pane').to.be.present
    client.expect.element('.leaflet-control-container').to.be.present
    client.end()
  }
}
