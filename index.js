// Write your solution in this file!
driver = {}

function updateDriverWithKeyAndValue(obj,key,value){
  const new_obj = {...obj}
  new_obj[key] = value
  return new_obj
}

function destructivelyUpdateDriverWithKeyAndValue(obj,key,value){
  obj[key] = value;
  return obj
}

function deleteFromDriverByKey(driver,key){
  const new_obj = {...driver};
  delete new_obj[key]
  return new_obj;
}

function destructivelyDeleteFromDriverByKey(driver,key){
  delete driver[key]
  return driver
}
