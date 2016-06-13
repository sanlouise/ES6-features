function greet (name = 'Andrew') {
	console.log ('Hello ' + name + '!');

	//Backticks - now we can use regular JS expressions
	console.log(`Hello ${name}!`);
}

greet();
greet('San');

console.log(`1 + 6 = ${1 + 6}`);
console.log(`Hey, 

	This looks awesome.

- Sandra`)

// ----------------------------------------------

var person = {
	name: 'Sandra',
	age: 23
};

var defaultPerson = {
	name: 'Anonymous',
	age: 0
};

function welcomePerson (person = defaultPerson) {
	console.log(`Hello ${person.name}!`)
}

welcomePerson();

// ----------------------------------------------


function sayHello (person = {name: 'Anonymous', age: '0'}) {
	console.log('Hey! It seems you are ' + person.name + ' and you are ' + person.age +' years old.');
}

sayHello();
sayHello({name: 'Sannie', age: '23'});

