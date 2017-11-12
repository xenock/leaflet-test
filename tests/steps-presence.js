module.exports = {
  'Steps elements presence': function(client){
    client.url('http://localhost:9000')
    client.expect.element('.steps').to.be.present
    client.expect.element('.painting-options').to.be.present
    client.expect.element('.painting-style').to.be.present
    client.expect.element('.painting-style__header').to.be.present
    client.expect.element('.painting-style__fill').to.be.present
    client.expect.element('.painting-style__fill > option:nth-child(10)').to.be.present
    client.expect.element('.painting-style__stroke').to.be.present
    client.expect.element('.painting-style__stroke > option:nth-child(5)').to.be.present
    client.expect.element('.painting-style__blending').to.be.present
    client.expect.element('.painting-style__blending > option:nth-child(5)').to.be.present
    client.expect.element('.painting-style__labels').to.be.present
    client.end()
  }
}
