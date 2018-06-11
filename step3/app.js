const https = require("https");

function getAndPrintHTML(options) {

  var requestOptions = {
    host: options.host,
    path: options.path
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

var myRequestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(myRequestOptions);