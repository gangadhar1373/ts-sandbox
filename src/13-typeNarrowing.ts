interface UserM {
	name: string;
	email: string;
}

interface Admin {
	name: string;
	email: string;
	isAdmin: boolean;
}

function isAdminAcc(account: UserM | Admin) {
	if ('isAdmin' in account) {
		return account.isAdmin;
	}
}

function logValue(x: Date | string) {
	if (x instanceof Date) {
		console.log(x.toUTCString());
	} else console.log(x.toUpperCase());
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
	return (pet as Fish).swim !== undefined;
}

interface Circle {
	kind: 'circle';
	radius: number;
}

interface Square {
	kind: 'square';
	side: number;
}

interface Rectangle {
	kind: 'rectangle';
	length: number;
	width: number;
}
type Shape = Circle | Square;

function getTrueShape(shape: Shape) {
	if (shape.kind === 'circle') {
		return Math.PI * shape.radius ** 2;
	}
	return shape.side * shape.side;
}

type Shape1 = Circle | Square | Rectangle;

function getArea(shape: Shape1) {
	switch (shape.kind) {
		case 'circle':
			return Math.PI * shape.radius ** 2;
		case 'square':
			return shape.side ** 2;
		case 'rectangle':
			return shape.length * shape.width;
		// this should never occur thats why you define the type to be never
		default:
			const _default: never = shape;
			return _default;
	}
}
