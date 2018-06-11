const https = require("https");

function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  var receivedHTML = '';
  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      receivedHTML += data;
    });
    response.on('end', function () {
      console.log(receivedHTML);

    });
  });
};

getAndPrintHTML();