let score: number | string = 23;
score = 43;
score = '55';

type UsersG = {
	name: string;
	id: number;
};

type AdminG = {
	username: string;
	id: number;
};

let gang: UsersG | AdminG = { name: 'Gangadhar', id: 1234 };

function getDbId(id: number | string) {
	console.log(`DB id is: ${id}`);
	// this will throw error
	// id.toLowerCase();
	// instead you should check for the type first
	if (typeof id === 'string') {
		id.toLowerCase();
	}
}

const data: number[] = [1, 2, 3, 4];
// data1 accepts either array of string or array of number but it wont be array of number or strings.
const data1: string[] | number[] = [1, 2, 3, 4];
// If you want to make array to accept array of either strings or numbers then it should be like this
const data2: (string | number | boolean)[] = [1, '2', 3, 4, true];
