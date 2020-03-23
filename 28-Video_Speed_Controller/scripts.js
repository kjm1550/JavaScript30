const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function changeSpeed(e) {
	// visual changes
	const y = e.pageY - this.offsetTop;
	const percent = y / this.offsetHeight;
	const height = Math.round(percent * 100) + '%';
	speedBar.style.height = height;
	// video changes
	const min = 0.4;
	const max = 4;
	const playbackRate = percent * (max - min) + min;
	speedBar.textContent = playbackRate.toFixed(2) + 'x';
	video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', changeSpeed);
