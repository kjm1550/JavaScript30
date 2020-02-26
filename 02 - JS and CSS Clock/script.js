const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

setTime = () => {
	const now = new Date();

	const secondsDegrees = (now.getSeconds() / 60) * 360 + 90;
	const minsDegrees = (now.getMinutes() / 60) * 360 + 90;
	const hoursDegrees = (now.getHours() / 12) * 360 + 90;

	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minHand.style.transform = `rotate(${minsDegrees}deg)`;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

	secondsDegrees === 90 ? (secondHand.style.transition = 'all 0s') : (secondHand.style.transition = 'all 0.05s');
	minsDegrees === 90 ? (minHand.style.transition = 'all 0s') : (minHand.style.transition = 'all 0.05s');
	hoursDegrees === 90 ? (hourHand.style.transition = 'all 0s') : (hourHand.style.transition = 'all 0.05s');
};

setInterval(setTime, 1000);
