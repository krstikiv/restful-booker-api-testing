import * as variable from "../util/variables";
import * as preRequest from "../bodies/preRequest";

export const createBookingBody = {
    firstname : variable.myName,
    lastname : variable.myLastName,
    totalprice : preRequest.price,
    depositpaid : true,
    bookingdates : {
        checkin : preRequest.checkin,
        checkout : preRequest.checkout
    },
    additionalneeds : variable.userAdditionalRequest
}
