class RoomNoReservationWithGivenIdError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "RoomNoReservationWithGivenIdError";
	}
}

export default RoomNoReservationWithGivenIdError;
