const https = require("https");

module.exports.getHTML = function (options, callback) {

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

module.exports.printHTML = function (html) {
  console.log(html);
};