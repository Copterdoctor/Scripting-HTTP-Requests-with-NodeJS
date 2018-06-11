const httpFunctions = require('../http-functions');

module.exports = function (input) {
    const lookup = {
        'e': '3',
        'l': '1',
        't': '7'
    }
    var output = input.split('').map(char => lookup[char] || char).join('')
    console.log(output);
}