'use strict';

function basicTeenager(age)  {
  if(20 > age && age > 12){
    return "You are a teenager!"
  }
}

function teenager(age) {
  if(20 > age && age > 12){
    return "You are a teenager!"
  } else {//(20 > age && age > 12){
  //  debugger;
      return "You are not a teenager"
  }
}

function ageChecker(age) {
  if(20 < age){
    return "You are a grownup"
  }else if (20 > age && age > 12) {
    return "You are a teenager!"
  } else {
    return "You are a kid"
  }
}

function ternaryTeenager(age)  {
   (20 > age && age > 12) ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
//  var age = age
  switch (age) {
    case 13://(20 > age && age > 12):
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
        return "You are a teenager";
      break;
    default:
        return "You have an age"; //are not a teenager"
  }
}
