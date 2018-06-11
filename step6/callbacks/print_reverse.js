const httpFunctions = require('../http-functions');

module.exports = function (params) {
  var output = params.split("").reverse().join("");
  console.log(output);
}