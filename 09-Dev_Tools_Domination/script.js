const dogs = [
	{ name: 'Snickers', age: 2 },
	{ name: 'Hugo', age: 8 }
];

function makeGreen() {
	const p = document.querySelector('p');
	p.style.color = '#BADA55';
	p.style.fontSize = '50px';
}

const string = 'console';

// Regular
console.log('Hello!');

// Interpolated
console.log(`Hello, this is the ${string}`);

// Styled
console.log('%cI am some green text', 'color: green');
console.log('%cI am some blue text', 'color: blue');

// warning!
console.warn('OH NOOO!!');

// Error :|
console.error('OH CRAP!!');

// Info
console.info('Fun Fact');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!!');

// clearing
console.log('console.clear() will clear out the console.');

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
	console.group(`${dog.name}`);
	console.log(`This is ${dog.name}`);
	console.log(`${dog.name} is ${dog.age} years old`);
	console.log(`${dog.name} is ${dog.age} dog years old`);
	console.groupEnd(`${dog.name}`);
});
dogs.forEach(dog => {
	console.groupCollapsed(`${dog.name}`);
	console.log(`This is ${dog.name}`);
	console.log(`${dog.name} is ${dog.age} years old`);
	console.log(`${dog.name} is ${dog.age} dog years old`);
	console.groupEnd(`${dog.name}`);
});

// counting
console.count('Count');
console.count('Count');
console.count('Count');
console.count('Count');
console.count('Count');
console.count('Count');

// table
console.table(dogs);

// timing
console.time('Fetching Data');
fetch('https://api.github.com/users/kjm1550')
	.then(data => data.json())
	.then(data => {
		console.timeEnd('Fetching Data');
		console.log(data);
	});
