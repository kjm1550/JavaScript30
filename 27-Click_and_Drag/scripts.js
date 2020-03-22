const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

function stopScroll() {
	isDown = false;
	slider.classList.remove('active');
}

function startingSpot(e) {
	isDown = true;
	slider.classList.add('active');
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
}

function scroll(e) {
	if (!isDown) return;
	e.preventDefault();
	const x = e.pageX - slider.offsetLeft;
	const walk = (x - startX) * 2;
	slider.scrollLeft = scrollLeft - walk;
}

slider.addEventListener('mouseleave', stopScroll);
slider.addEventListener('mouseup', stopScroll);
slider.addEventListener('mousedown', startingSpot);
slider.addEventListener('mousemove', scroll);
