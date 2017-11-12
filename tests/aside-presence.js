module.exports = {
  'Aside elements presence': function(client){
    client.url('http://localhost:9000')
    client.expect.element('.side-bar').to.be.present
    client.expect.element('.side-bar__carto-logo').to.be.present
    client.expect.element('.side-bar__option').to.be.present
    client.expect.element('.side-bar__option .fa-pencil').to.be.present
    client.expect.element('.side-bar__option .fa-sliders').to.be.present
    client.end()
  }
}
