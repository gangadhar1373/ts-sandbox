const users = {
	name: 'Gangadhar',
	email: 'myEmail@test.com',
	isActive: true,
};

// this tells that the function should always return an object with name and price
function createCourse(): { name: string; price: number } {
	return {
		name: 'reactJs',
		price: 200,
	};
}

type Users = {
	name: string;
	email: string;
	isActive: boolean;
};

function createUser(user: Users): Users {
	return {
		name: '',
		email: '',
		isActive: true,
	};
}

createUser({
	name: '',
	email: '',
	isActive: true,
});

// readonly allows us to make properties read only

type User1 = {
	readonly _id: string;
	name: string;
	email: string;
	isActive: boolean;
	creditCardDetails?: string;
};

let myUser: User1 = {
	_id: '123',
	name: 'G',
	email: 'g@g.com',
	isActive: false,
};
// this cant be done
// myUser._id = 'abc';

type cardNumber = {
	cardNumber: string;
};

type cardDate = {
	cardDate: string;
};

// You can combine the details like this
type cardDetails = cardNumber &
	cardDate & {
		cardNumber: string;
	};
