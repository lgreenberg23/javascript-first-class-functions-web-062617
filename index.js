
function receivesAFunction(callback){
	return callback()
}

function returnsANamedFunction(){
	return function eating() {
		console.log("om nom nom")
	}
}

function returnsAnAnonymousFunction() {
	return function() {
		console.log("om nom nom")
	}
}

