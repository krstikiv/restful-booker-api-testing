import { endpoint } from "../util/variables";
import axios from "axios";
import { bookingId } from "../test/booking.test";

export function getDeletedBookingInfo(headers){
    return axios.get(`${endpoint}/booking/${bookingId}`, headers);
}