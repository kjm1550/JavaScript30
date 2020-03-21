const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
	console.log(this.classList.value);
	//e.stopPropagation(); this can be used in place of the once: true
}
function clickButton() {
	this.remove();
}

divs.forEach(div => div.addEventListener('click', logText, { capture: false, once: true }));
button.addEventListener('click', clickButton, { once: true });
