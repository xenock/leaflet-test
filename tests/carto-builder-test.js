module.exports = {
  'Carto Builder': function (client) {
    client
      .url('http://localhost:9000')
      .pause(1000);

    client.expect.element('body').to.be.present.before(1000);
    client.end();
  }
};
