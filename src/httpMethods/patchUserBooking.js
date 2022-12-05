import { endpoint } from "../util/variables";
import { bookingId } from "../test/booking.test";
import { token } from "../test/booking.test";

import axios from "axios";

export function patchUserBooking(body, headers) {
    headers["headers"]["Cookie"] = `token=${token}`;
  return axios.patch(`${endpoint}/booking/${bookingId}`, body, headers);
}