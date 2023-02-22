import * as Uuid from "uuid";

class ReservationRequestEntity {
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
	}>): ReservationRequestEntity {
		const id = Uuid.v4();
		return new ReservationRequestEntity({id, clientId, roomId, startsAt, endsAt});
	}
}

export default ReservationRequestEntity;
