import ReservationRequestInvalidDatesError from "./ReservationRequestInvalidDatesError.js";
import * as Uuid from "uuid";

class ReservationRequest {
	private readonly id: string;
	private readonly clientId: string;
	private readonly roomId: string;
	private readonly startsAt: Date;
	private readonly endsAt: Date;

	private constructor({
		id,
		clientId,
		roomId,
		startsAt,
		endsAt,
	}: Readonly<{
		id: string;
		clientId: string;
		roomId: string;
		startsAt: Date;
		endsAt: Date;
	}>) {
		this.id = id;
		this.clientId = clientId;
		this.roomId = roomId;
		this.startsAt = startsAt;
		this.endsAt = endsAt;
	}

	public static create({
		clientId,
		roomId,
		startsAt,
		endsAt,
	}: Readonly<{
		clientId: string;
		roomId: string;
		startsAt: Date;
		endsAt: Date;
	}>): ReservationRequest {
		if (startsAt >= endsAt) {
			throw new ReservationRequestInvalidDatesError();
		}
		const id = Uuid.v4();
		return new ReservationRequest({id, clientId, roomId, startsAt, endsAt});
	}
}

export default ReservationRequest;
