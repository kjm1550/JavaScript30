const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 300;

function shadow(e) {
	const { offsetWidth: width, offsetHeight: height } = hero;
	let { offsetX: x, offsetY: y } = e;

	if (this !== e.target) {
		x = x + e.target.offsetLeft;
		y = y + e.target.offsetTop;
	}

	const xWalk = Math.round((x / width) * walk - walk / 2);
	const yWalk = Math.round((y / height) * walk - walk / 2);

	console.log(xWalk + ' ' + yWalk);

	text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 red,
    ${xWalk * -1}px ${yWalk}px 0 blue,
    ${xWalk}px ${yWalk * -1}px 0 green,
    ${xWalk * -1}px ${yWalk * -1}px 0 yellow`;
}

hero.addEventListener('mousemove', shadow);
