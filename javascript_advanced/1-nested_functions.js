/*
Creating a variable outside the function.
Creating nested functions
Closures would also be implemeted
*/

let globalVariable = "Welcome";

function outer() {
	altert(globalVaraiable);
	let course = "Holberton";
	inner();
	function inner() {
		alert(globalVariable + " " + course)
		let exclamation = "!";
		function inception() {
			alert(globalVariable + " " + course + exclamation);
		}
	}
}
outer();

