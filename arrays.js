// TODO 1 : define chocolate bars
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

// TODO 2 : create functions add Element to start of array
var addElementToBeginningOfArray = (arr, elem) => {
	return [elem, ...arr];
};

var destructivelyAddElementToBeginningOfArray = (arr, elem) => {
	arr.unshift(elem);
	return arr;
};

// TODO 3 : create functions add Element to end of array
var addElementToEndOfArray = (arr, elem) => {
	return [...arr, elem];
};

var destructivelyAddElementToEndOfArray = (arr, elem) => {
	arr.push(elem);
	return arr;
};