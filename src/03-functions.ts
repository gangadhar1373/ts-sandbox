// always pass the type to the function args
function addTwo(num: number) {
	return num + 2;
}

addTwo(5);

function signUp(name: string, email: string, isPaid: boolean = false) {
	console.log(`${name} with ${email} ${isPaid ? 'paid' : 'not paid'} `);
}

// If you return a string ts is not catching the error in return type this is a problem to fix this declare the return type as well
function addTwonums1(num: number) {
	return 'hello';
}
function addTwonums(num: number): number {
	return num + 2;
}

// These kinds of situations dose happen where you will return more than one type
// function getValue(myVal: number): boolean {
// 	if (myVal > 5) return true;
// 	else return '200';
// }

const heros = ['THOR', 'SPIDER MAN', 'BAT MAN'];

// Declare return type for call back functions
heros.map((hero): string => {
	return `Hero is ${hero}`;
});

// not returning anything
function consoleError(errmsg: string): void {
	console.log(errmsg);
}

// Functions that never return: Functions that throw errors or have infinite loops can be typed as never.
function throwErrors(err: string): never {
	throw new Error(err);
}
