import {describe, beforeEach, test, expect} from "vitest";
import Room from "../src/Room.js";
import Repository from "../src/services/Repository.js";

describe("Reserving a room", () => {
	let repository: Repository;
	beforeEach(() => {
		repository = new Repository();
	});

	describe("Reserve a first room", () => {
		test("Should reserve a room", () => {
			const room = new Room("Office #1");
			repository.save(room);
			expect(repository.listOfRooms).toHaveLength(1);
		});
	});

	describe("Reserve two rooms with different names", () => {
		test("Should return true", () => {
			const room1 = new Room("Office #1");
			const room2 = new Room("Office #2");

			repository.save(room1);
			repository.save(room2);

			expect(repository.listOfRooms).toHaveLength(2);
		});
	});

	describe("Reserve two rooms with the same names", () => {
		test("Should return true", () => {
			const room1 = new Room("Office #1");
			const room2 = new Room("Office #1");

			repository.save(room1);
			repository.save(room2);

			expect(repository.listOfRooms).toHaveLength(1);
		});
	});

	describe("Repository returns reserved rooms' names", () => {
		test("Should return true", () => {
			const room1 = new Room("Office #1");
			const room2 = new Room("Office #2");

			repository.save(room1);
			repository.save(room2);

			const roomNames = repository.findAllRoomsNames();
			expect(roomNames.length).toBe(2);
			expect(roomNames).toContainEqual({name: "Office #1"});
			expect(roomNames).toContainEqual({name: "Office #2"});
		});
	});
});
