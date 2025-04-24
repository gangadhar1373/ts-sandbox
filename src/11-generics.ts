const scores: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
	return val;
}

function identityTwo(val: any): any {
	return val;
}
// using generics
function identityThree<Type>(val: Type): Type {
	return val;
}

// short way of generics
function identityFour<T>(val: T): T {
	return val;
}

interface Bottle {
	brand: string;
	type: number;
}

identityFour<Bottle>({
	brand: 'stanly',
	type: 5,
});

function getSearchProducts<T>(products: T[]): T {
	return products[3];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
	return products[5];
};

function anotherFunction<T, U extends number>(valOne: T, valTwo: U): object {
	return {
		valOne,
		valTwo,
	};
}

interface Database {
	connection: string;
	username: string;
	password: string;
}

interface Quiz {
	name: string;
	type: string;
}
interface Course {
	name: string;
	author: string;
	subject: string;
}

class Sellable<T> {
	public cart: T[] = [];
	addToCart(product: T) {
		this.cart.push(product);
	}
}
