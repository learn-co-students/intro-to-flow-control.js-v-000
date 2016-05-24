'use strict';

function basicTeenager(age){
	if(age > 12 && age < 20){
		return "You are a teenager!";
	}
}

function teenager(age){
	if(age > 12 && age < 20){
		return "You are a teenager!";
	} else {
		return "You are not a teenager";
	}
}

function ageChecker(age){
	if(age > 12 && age < 20){
		return "You are a teenager!";
	} else if (age < 13){
		return "You are a kid";
	} else {
		return "You are a grownup";
	}
}

function ternaryTeenager(age){
	return (age > 12 && age < 20 ? "You are a teenager" : "You are not a teenager");
}


function switchAge(age){
	var msg = "You are a teenager";
	switch(age){
		case 13:
			return msg;
			break;
		case 14:
			return msg;
			break;
		case 15:
			return msg;
			break;
		case 16:
			return msg;
			break;
		case 17:
			return msg;
			break;
		case 18:
			return msg;
			break;
		case 19:
			return msg;
			break;
		default:
			return "You have an age";
	}
}