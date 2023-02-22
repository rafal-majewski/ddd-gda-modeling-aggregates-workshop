class ReservationRequestInvalidDatesError extends Error {
	constructor() {
		super("Reservation dates are invalid");
		this.name = "ReservationRequestInvalidDatesError";
	}
}

export default ReservationRequestInvalidDatesError;
