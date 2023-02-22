import Room from "../Room.js";

export default class Repository {
	constructor(public listOfRooms: Room[] = []) {}

	save(room: Room) {
		if (!this.listOfRooms.find((x) => x.name == room.name)) this.listOfRooms.push(room);
	}

	findAllRoomsNames(): RoomName[] {
		return this.listOfRooms.map((x) => ({name: x.name}));
	}

	listReservationsForGivenRoom(roomName: string) {
		return this.listOfRooms.find((room) => room.name == roomName)?.getReservations();
	}
}

export type RoomName = {
	name: string;
};

export type reservation = {
	user: string;
	from: Date;
	to: Date;
};
