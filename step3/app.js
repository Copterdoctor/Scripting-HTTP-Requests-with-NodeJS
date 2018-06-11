const https = require("https");

function getAndPrintHTML(options) {
  
  var receivedHTML = '';
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      receivedHTML += data;
    });
    response.on('end', function () {
      console.log(receivedHTML);

    });
  });
};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);