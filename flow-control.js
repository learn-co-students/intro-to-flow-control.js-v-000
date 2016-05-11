'use strict';

var basicTeenager = function(age) {
  if (isWithinTeenRange(age)) {
    return "You are a teenager!"
  }
}

var teenager = function(age) {
  if (isWithinTeenRange(age)) {
    return "You are a teenager!"
  } else {
    return "You are not a teenager"
  }
}

var ageChecker = function(age) {
  if (isWithinTeenRange(age)) {
    return "You are a teenager!"
  } else if (age <= 12) {
    return "You are a kid"
  } else if (age >= 20) {
    return "You are a grownup"
  } else {
    return "You are not a teenager"
  }
}

var ternaryTeenager = function(age) {
  return (isWithinTeenRange(age) ? "You are a teenager" : "You are not a teenager")
}

var switchAge = function(age) {
  if (isWithinTeenRange(age)) {
    return 'You are a teenager'
  } else {
    return 'You have an age'
  }
}

function isWithinTeenRange(age) {
  return (age >= 13 && age <= 19)
}
