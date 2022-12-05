import { endpoint } from "../util/variables";
import { bookingId } from "../test/booking.test";
import { token } from "../test/booking.test";

import axios from "axios";

export function deleteUserBooking(headers) {
    headers["headers"]["Cookie"] = `token=${token}`;
  return axios.delete(`${endpoint}/booking/${bookingId}`, headers);
}