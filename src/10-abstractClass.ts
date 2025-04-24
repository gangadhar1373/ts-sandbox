abstract class TakePhotos {
	constructor(public cameraMode: string, public filter: string) {}
	abstract getSepia(): void;
	getReel(): number {
		// some complex calculation
		return 8;
	}
}
// you cant create an object using abstract class.
// Its like a blueprint.
// Its the responsibility of the class that extends the TakePhotos
class Insta extends TakePhotos {
	constructor(
		public cameraMode: string,
		public filter: string,
		public burst: number
	) {
		super(cameraMode, filter);
	}
	getSepia(): void {
		console.log('getSepia');
	}
}
