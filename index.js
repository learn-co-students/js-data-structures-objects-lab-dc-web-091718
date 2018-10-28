// Write your solution in this file!
let driver = {};

function copyObject(object) {
	return JSON.parse(JSON.stringify(object));
}

function updateDriverWithKeyAndValue (object, key, value) {
	let newDriver = copyObject(object);
	newDriver[key] = value;
	return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value){
	driver[key] = value;
	return driver;
}

function deleteFromDriverByKey(object, key) {
	let newDriver = copyObject(object);
	delete newDriver[key];
	return newDriver;
}

function destructivelyDeleteFromDriverByKey(object, key) {
	delete object[key];
	return object;
}