const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);

let lastChecked;
function handleCheck(e) {
	console.log(e);
	let inBetween = false;

	// check that the shift key is held down and it is beig checked when the box is clicked
	if (e.shiftKey && this.checked) {
		// loop over every check box
		checkboxes.forEach(checkbox => {
			console.log(checkbox);
			if (checkbox === this || checkbox === lastChecked) inBetween = !inBetween;
			if (inBetween && lastChecked) checkbox.checked = true;
		});
	}
	lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
