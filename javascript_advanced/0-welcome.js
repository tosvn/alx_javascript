// create a function that to be displayed on the browser using javaScript
function welcome(firstname, lastname) {
	let fullname = firstname + " " + lastname;
	function displayFullName() {
		alert("Welcome " + fullname + "!");
	}

	displayFullName();
}
