class RoomOccupiedError extends Error {
	public constructor(message: string) {
		super(message);
	}
}

export default RoomOccupiedError;
