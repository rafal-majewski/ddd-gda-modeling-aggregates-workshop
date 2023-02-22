import Reservation from "./Reservation.js";
import RoomOccupiedError from "./RoomOccupiedError.js";
import RoomNoReservationWithGivenIdError from "./RoomNoReservationWithGivenIdError.js";

export default class Room {
	private reservations: Reservation[] = [];

	public constructor(public readonly name: string) {}

	private addReservation(reservation: Reservation): void {
		const index = this.reservations.findIndex(
			(r) => r.startsAt.getTime() > reservation.startsAt.getTime()
		);
		if (index === -1) {
			this.reservations.push(reservation);
		} else {
			this.reservations.splice(index, 0, reservation);
		}
	}

	public reserve(reservation: Reservation): void {
		if (!this.isAvailable(reservation.startsAt, reservation.endsAt)) {
			throw new RoomOccupiedError("Room is occupied");
		}
		this.addReservation(reservation);
	}

	public getReservations(): readonly Reservation[] {
		return Array.from(this.reservations);
	}

	public isAvailable(startsAt: Date, endsAt: Date): boolean {
		for (const r of this.reservations) {
			if (r.startsAt < endsAt && r.endsAt > startsAt) {
				return false;
			}
		}
		return true;
	}

	public removeReservation(reservationId: string): void {
		const index = this.reservations.findIndex((r) => r.id === reservationId);
		if (index === -1) {
			throw new RoomNoReservationWithGivenIdError("No reservation with given id");
		}
		this.reservations.splice(index, 1);
	}

	public getAllReservationsOfClient(clientId: string): readonly Reservation[] {
		return this.reservations.filter((r) => r.clientId === clientId);
	}
}
