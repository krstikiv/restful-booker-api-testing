import { randomPrice, checkIn, checkOut } from "../util/randomGenerator";

export const price = randomPrice(20,100);

export const checkin = checkIn();

export const checkout = checkOut(2);

export const priceUpdated = randomPrice(100,500);

export const checkoutUpdated = checkOut(5);