import {describe, beforeAll, test, expect} from "vitest";
import Room from "../src/Room.js";
import Reservation from "../src/Reservation.js";

describe("Room unit tests", () => {
	beforeAll(() => {});
	describe("Room was created with an empty reservation list", () => {
		test("reservation list is an empty array", () => {
			const room = new Room("Room1");
			expect(room.getReservations.length).toBe(0);
		});
	});
	describe("Room availability with empty reservations list", () => {
		test("Room is available if there are no reservations at all", () => {
			const room = new Room("Room1");
			const date1 = new Date("01.02.2022");
			const date2 = new Date("15.02.2022");
			expect(room.isAvailable(date1, date2)).toBe(true);
		});
	});
	describe("Room reservation", () => {
		test("Reservation can be made", () => {
			const room = new Room("123");
			const date1 = new Date("12.01.2023");
			const date2 = new Date("17.01.2023");
			const reservation = Reservation.create("453", date1, date2);

			room.addReservation(reservation);
		});
	});

	// describe("Client make an valid reservtion", () => {
	// 	test("Manager got signal?", () => {
	// 		expect(true).toBe(true);
	// 	});

	// 	test("should return registration id maybe?", () => {
	// 		expect(true).toBe(true);
	// 	});
	// });
	// describe("Client make an invalid reseravtionn", () => {
	// 	test("Manager got signal?", () => {
	// 		expect(true).toBe(true);
	// 	});

	// 	test("should throw error?", () => {
	// 		expect(true).toBe(true);
	// 	});
	// });
});
