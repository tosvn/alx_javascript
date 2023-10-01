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

