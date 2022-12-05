import { endpoint } from "../util/variables";
import axios from "axios";

export function createBooking(body, headers){
    return axios.post(`${endpoint}/booking`, body, headers);
}
