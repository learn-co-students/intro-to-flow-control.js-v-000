'use strict';
function basicTeenager(num) {
  if (num >= 13 && num <= 19) {
    return "You are a teenager!";
  }
  else {
    return undefined;
  }
}

function teenager(num) {
   if (num >= 13 && num <= 19) {
    return "You are a teenager!";
  }
  else {
    return "You are not a teenager";
  } 
}

function ageChecker(num) {
  if (num >= 13 && num <= 19) {
    return "You are a teenager!";
  }
  else if (num < 13) {
    return "You are a kid";
  }
  else {
    return "You are a grownup";
  }
}

function ternaryTeenager(num) {
  if (num >= 13 && num <= 19) {
    return "You are a teenager";
  }
  else {
    return "You are not a teenager";
  }
}

function switchAge(num) {
  if (num >= 13 && num <= 19) {
    return "You are a teenager";
  }
  else {
    return "You have an age"
  }
}