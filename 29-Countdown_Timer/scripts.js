const buttons = document.querySelectorAll('[data-time]');
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
let countdown;

function startTime() {
	const seconds = parseInt(this.dataset.time);
	timer(seconds);
}
function startCustomTime(e) {
	e.preventDefault();
	const mins = this.minutes.value;
	timer(mins * 60);
	this.reset();
}

function timer(seconds) {
	clearInterval(countdown);
	const now = Date.now();
	const then = now + seconds * 1000;
	displayTimeLeft(seconds);
	displayEndTime(then);

	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		// check if we should stop the timer
		if (secondsLeft < 0) {
			clearInterval(countdown);
			return;
		}
		// display the time
		displayTimeLeft(secondsLeft);
	}, 1000);
}

function displayTimeLeft(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainderSeconds = seconds % 60;
	const displayTime = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
	document.title = displayTime;
	timerDisplay.textContent = displayTime;
}

function displayEndTime(timestamp) {
	const end = new Date(timestamp);
	const hours = end.getHours();
	const mins = end.getMinutes();
	endTime.textContent = `Be back at ${hours > 12 ? hours - 12 : hours}:${mins < 10 ? '0' : ''}${mins}`;
}

buttons.forEach(button => button.addEventListener('click', startTime));
document.customForm.addEventListener('submit', startCustomTime);
