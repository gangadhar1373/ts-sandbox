// Either number or string can be passed to this array
const newUser: (number | string)[] = ['hc', 'uc'];
// this is a tuple
const newUsers: [string, number, boolean] = ['hc', 123, true];

// enums
const AISLE = 0;
const MIDDLE = 1;
const WINDOW = 2;

enum SeatChoice {
	AISLE,
	MIDDLE,
	WINDOW,
	FOURTH = 22,
}

const hcSeat = SeatChoice.AISLE;
