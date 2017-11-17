module.exports = {
  'select changes fill color': function(client){
    client.url('http://localhost:9000')
    client.waitForElementPresent('path.leaflet-interactive', 3000)
    client.expect.element('path.leaflet-interactive').to.be.present
    client.getAttribute('path.leaflet-interactive', 'fill', function(result){
      this.assert.equal(result.value, "#A52A2A")
    })
    client.click('#painting-style__fill')
    client.waitForElementVisible("option[value='#DEB887']", 1000)
    client.click("option[value='#DEB887']")
    client.getAttribute('path.leaflet-interactive', 'fill', function(result){
      this.assert.equal(result.value, '#DEB887')
    })
    client.end()
  },
  'select changes stroke width': function(client){
    client.url('http://localhost:9000')
    client.waitForElementPresent('path.leaflet-interactive', 3000)
    client.expect.element('path.leaflet-interactive').to.be.present
    client.getAttribute('path.leaflet-interactive', 'stroke-width', function(result){
      this.assert.equal(result.value, 1)
    })
    client.click('#painting-style__stroke')
    client.waitForElementVisible('option[value="2"]', 1000)
    client.click('option[value="2"]')
    client.getAttribute('path.leaflet-interactive', 'stroke-width', function(result){
      this.assert.equal(result.value, 2)
    })
    client.end()
  },
  'checkbox changes tooltip showing': function(client){
    client.url('http://localhost:9000')
    client.waitForElementPresent('.leaflet-tooltip-pane', 3000)
    client.getAttribute('.leaflet-tooltip-pane', 'style', function(result){
      this.assert.equal(result.value, '')
    })
    client.expect.element('.painting-style__labels-option').to.be.present
    client.expect.element('.painting-style__labels-option').to.be.visible
    client.expect.element('.painting-style__labels-option').to.be.selected
    client.click('.painting-style__labels-option')
    client.expect.element('.leaflet-tooltip-pane').not.to.be.visible
    client.getAttribute('.leaflet-tooltip-pane', 'style', function(result){
      this.assert.equal(result.value, 'display: none;')
    })
    client.end()
  }
}
