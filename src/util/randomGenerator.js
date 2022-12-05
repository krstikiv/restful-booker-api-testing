import moment from "moment/moment";

export function randomPrice(min, max) {
    if (max == null) {
          max = min;
          min = 0;
        }

    return min + Math.floor(Math.random() * (max - min + 1));
}

export function checkIn() {
    return moment().format(("YYYY-MM-DD"));
}


export function checkOut(x) {
    return moment().add(x,"days").format(("YYYY-MM-DD"));
}