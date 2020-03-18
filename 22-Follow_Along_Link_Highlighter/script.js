const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
	const linkCoords = this.getBoundingClientRect();
	const coords = {
		top: linkCoords.top + window.scrollY,
		left: linkCoords.left + window.scrollX,
		width: linkCoords.width,
		height: linkCoords.height
	};

	highlight.style.width = `${coords.width}px`;
	highlight.style.height = `${coords.height}px`;
	highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
