// Write your solution in this file!
const driver = {
	
}




function updateDriverWithKeyAndValue(obj, key, value){

	new_obj = {...obj}
	new_obj[key] = value
	return new_obj
	
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){

	driver[key] = value
	return driver
}

function deleteFromDriverByKey(obj, key){
		new_obj = {...obj}
		delete new_obj[key]
		return new_obj

}

function destructivelyDeleteFromDriverByKey(obj, key){
		
		delete obj[key]
		return obj

}