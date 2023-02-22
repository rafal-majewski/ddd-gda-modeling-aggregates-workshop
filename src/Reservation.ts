import * as Uuid from "uuid";
import ReservationInvalidDatesError from "./ReservationInvalidDatesError.js";

class Reservation {
	private constructor(
		public readonly id: string,
		public readonly clientId: string,
		public readonly startsAt: Date,
		public readonly endsAt: Date
	) {}

	public static create(clientId: string, startsAt: Date, endsAt: Date): Reservation {
		if (startsAt >= endsAt) {
			throw new ReservationInvalidDatesError();
		}
		return new Reservation(Uuid.v4(), clientId, startsAt, endsAt);
	}
}

export default Reservation;
