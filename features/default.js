//Default only used if not provided
function sayHello (name = "Sandra") {
	console.log('Hey ' + name + '!');
}

sayHello();
sayHello("Kel");

function measureHeight (height = "300") {
	console.log("It is very high, " + height + " meters.")
}

measureHeight();

function greetUser (user = {name: 'Anonymous'}) {
	console.log('Hello ' + user.name + '!')
}

greetUser();
greetUser({name: 'San'});