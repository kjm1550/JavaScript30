const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
	.map(node => node.dataset.time)
	.map(timeCode => {
		const [mins, secs] = timeCode.split(':').map(parseFloat);
		return mins * 60 + secs;
	})
	.reduce((total, seconds) => total + seconds);

let secondsLeft = seconds;
const hours = Math.floor(seconds / 3600);
secondsLeft = secondsLeft % 3600;

const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours + ':' + minutes + ':' + secondsLeft);

const totalTime = document.querySelector('#totalTime');
console.log(totalTime);
totalTime.innerHTML = 'Total Time: ' + hours + ':' + minutes + ':' + secondsLeft;
