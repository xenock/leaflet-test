module.exports = {
  'select changes fill color': function(client){
    client.url('http://localhost:9000')
    client.waitForElementPresent('path.leaflet-interactive', 3000)
    client.expect.element('path.leaflet-interactive').to.be.present
    client.getAttribute('path.leaflet-interactive', 'fill', function(result){
      this.assert.equal(result.value, '#A52A2A')
    })
    client.click('.painting-style__fill option[value=#DEB887]')
    client.end()
  }
}
