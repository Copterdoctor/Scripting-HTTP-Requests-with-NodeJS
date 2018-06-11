const httpFunctions = require('./http-functions');
const printLowercase = require('./callbacks/print_lowercase');
const printUppercase = require('./callbacks/print_uppercase');
const printReverse = require('./callbacks/print_reverse');
const print1337 = require('./callbacks/print_1337');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};
httpFunctions.getHTML(requestOptions, printLowercase);

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};
httpFunctions.getHTML(requestOptions, printUppercase);

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};
httpFunctions.getHTML(requestOptions, printReverse);

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};
httpFunctions.getHTML(requestOptions, print1337);