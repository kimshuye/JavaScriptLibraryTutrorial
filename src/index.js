var uniRandomArr = require('unique-random-array');
var catalog = require('./catalog.json');

module.exports = {
	all : catalog
	,random : uniRandomArr(catalog)
};

