var basicTeenager = function(age){
  if(age > 12 && age < 20) {
    return "You are a teenager!";
  }
}

var teenager = function(age){
  if(age > 12 && age < 20) {
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
}

var ageChecker = function(age){
  if(age < 13){
    return "You are a kid";
  } else if(age < 20){
    return "You are a teenager!";
  } else {
    return "You are a grownup";
  }
}

var switchAge = function(age){
  switch(age){
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      return "You are a teenager";
      break;
    default:
      return "You have an age";
  }
}
var ternaryTeenager =  function(age){ 
 return (age < 20 && age > 12) ? "You are a teenager" : "You are not a teenager";
}

// var greeting = "Good" + ((now.getHours() > 17) ? " evening." : " day.");