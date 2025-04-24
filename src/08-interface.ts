interface UsersOld {
	email: string;
	userId: number;
	startTrail: () => string;
	stars(): string; // both startTrail and stars are same
	getCoupon(cuponname: string, value: number): number;
}

const Gangs: UsersOld = {
	email: 'gang@gmail',
	userId: 123,
	startTrail: () => {
		return 'trail started';
	},
	stars: () => '5',
	getCoupon: (name: 'gangas', off: 20) => 40,
};

// Reopening of an interface
// if we declare interface again then it will add that extra property to the existing object

interface UsersOld {
	githubToken?: string;
}

// inheritance

interface Admin extends User {
	role: 'admin' | 'ta' | 'learner';
}
