module.exports = {
  'Steps elements presence': function(client){
    client.url('http://localhost:9000')
    client.expect.element('.steps').to.be.present
    client.expect.element('.painting-options').to.be.present
    client.expect.element('.painting-style').to.be.present
    client.expect.element('.painting-style__header').to.be.present
    client.expect.element('.painting-style__fill-options').to.be.present
    client.expect.element('.painting-style__fill-options > option:nth-child(10)').to.be.present
    client.expect.element('.painting-style__stroke-options').to.be.present
    client.expect.element('.painting-style__stroke-options > option:nth-child(5)').to.be.present
    client.expect.element('.painting-style__blending-options').to.be.present
    client.expect.element('.painting-style__blending-options > option:nth-child(5)').to.be.present
    client.expect.element('.painting-style__labels-option').to.be.present
    client.end()
  }
}
