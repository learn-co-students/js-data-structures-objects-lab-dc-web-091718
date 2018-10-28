// Write your solution in this file!
const driver = {};

function
updateDriverWithKeyAndValue(driver, key, value){
  //returns an driver with the original key value pairs and the new key value pair
  const newDriver = {...driver};
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key]=value;

  return driver;
}

function deleteFromDriverByKey(driver, key){
  const newerDriver = driver;

  return delete newerDriver.key;

}

function destructivelyDeleteFromDriverByKey(driver, key){
   delete driver[key];
   return driver;

}
