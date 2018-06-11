const https = require("https");

function getHTML(options, callback) {
  
  var receivedHTML = '';
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      receivedHTML += data;
    });
    response.on('end', function () {
      callback(receivedHTML);
    });
  });
};

function printHTML (html) {
  console.log(html);
};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);