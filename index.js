// Write your solution in this file!
//defines a 'driver' driver as object
const driver = {
  driver: "driver"
}

function updateDriverWithKeyAndValue(object, key, value) {
  const newObj = {...object};
  newObj[key] = value;
  return newObj
}

//updates 'driver' with the given 'key' and 'value'
//and returns the entire updated driver
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key]= value;
  return driver
}
//deletes 'key' from clone of driver and
//return the new driver(non-destructive)
function deleteFromDriverByKey(object, key) {
  const newObj = {...object}
  delete newObj[key]
  return newObj
}
function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}
