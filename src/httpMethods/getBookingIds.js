import { endpoint } from "../util/variables";
import axios from "axios";

export function getBookingIds(headers){
    return axios.get(`${endpoint}/booking`, headers);
}