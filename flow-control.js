'use strict';

function basicTeenager(argument) {
  if (argument >= 13 && argument <= 19) {
    return "You are a teenager!";
  } 
}

function teenager(argument) {
  if (argument >= 13 && argument <= 19) {
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
}

function ageChecker(argument) {

  if (argument >= 13 && argument <= 19) {
    return "You are a teenager!";

  } else if (argument < 13) {
    return "You are a kid";

   } else {
      return "You are a grownup";
    }
  }

  function ternaryTeenager(argument) {
   return argument >= 13 && argument <= 19 ? "You are a teenager" : "You are not a teenager";
  }

  function switchAge(argument) {
   switch (argument) {
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
    return "You have an age"

   }
  }
