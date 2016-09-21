// require('./module1.js');
// require('./module2.js');

var $ = require('jquery');
require('../css/style.css');

$('<h1>Holy shit, $ works</h1>').appendTo($('#message'));