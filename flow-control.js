function basicTeenager (x) {
	if (x >= 13 && x <= 19) {
		return 'You are a teenager!';
	}
}

function teenager(x){
	if (x >= 13 && x <= 19) {
		return 'You are a teenager!';
	} else {
		return 'You are not a teenager';
	}
}

function ageChecker(x){
	if(x > 19) {
		return 'You are a grownup';
	} else if (x < 13) {
		return 'You are a kid';
	} else {
		return 'You are a teenager!';
	}
}

function ternaryTeenager(x){
	if (x >= 13 && x <= 19) {
		return 'You are a teenager';
	} else {
		return 'You are not a teenager';
	}
}

function switchAge(x){
	if (x >= 13 && x <= 19) {
		return 'You are a teenager';
	} else {
		return 'You have an age';
	}
}