class ReservationInvalidDatesError extends Error {
	constructor() {
		super("Reservation dates are invalid");
		this.name = "ReservationInvalidDates";
	}
}

export default ReservationInvalidDatesError;
