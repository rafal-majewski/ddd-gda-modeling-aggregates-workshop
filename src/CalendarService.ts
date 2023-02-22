import RoomRepository from "./services/Repository.js";
import Reservation from "./Reservation.js";

import ReservationRequest from "./ReservationRequest.js";

class CalendarService {
	private readonly roomRepository: RoomRepository;
	private readonly awaitingReservations: ReservationRequest[] = [];

	public constructor(roomRepository: RoomRepository) {
		this.roomRepository = roomRepository;
	}

	// public getAllClientReservations(clientId: string): readonly Reservation[] {}

	public placeReservationRequest(request: ReservationRequest): void {}
}

export default CalendarService;
