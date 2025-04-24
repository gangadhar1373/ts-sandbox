let greetings: string = 'Hello Gangs';
let myNum = 8;

// number
let userId: number = 123232;

// boolean
let isLoggedIn: boolean = false;

// any has a special type that you can use when ever you don't want a particular value to cause typechecking errors. Its not a good practice to use any
let hero: any;

function getHero() {
	return 'Gangs';
}

hero = getHero();
