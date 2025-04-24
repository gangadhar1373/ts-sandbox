class UserClass {
	email: string;
	name: string;
	readonly city: string = 'Tampa';
	// you wont be able to access this any where else other than this class
	private _courseCount = 1;
	// You can access this in this class and the sub classes
	protected _courses = 'Science';

	constructor(email: string, name: string) {
		this.email = email;
		this.name = name;
	}
	get getAppleEmail(): string {
		return `apple${this.email}`;
	}

	get courseCount(): number {
		return this._courseCount;
	}
	// setters should only be setting things in the class.
	// it should not return anything
	// this will throw an error
	// set courseCounts(courseNum: string): void {
	// 	return courseNum;
	// }
	set courseCount(courseNum) {
		if (courseNum <= 1) {
			throw new Error('Course count should be more than 1');
		}
		this._courseCount = courseNum;
	}
}

class SubUser extends UserClass {
	isFamily: boolean = true;
	changeCourses() {
		this._courses = 'Maths';
	}
}

const gangs = new UserClass('gangs@test.com', 'Gangadhar');

// interfaces in classes

interface TakePhoto {
	cameraMode: string;
	filter: string;
	burst: number;
}

interface Story {
	createStory(): void;
}

class Instagram implements TakePhoto {
	constructor(
		public cameraMode: string,
		public filter: string,
		public burst: number
	) {}
}

class Youtube implements TakePhoto {
	constructor(
		public cameraMode: string,
		public filter: string,
		public burst: number,
		public short: string
	) {}

	createStroy(): void {
		console.log('story created');
	}
}
