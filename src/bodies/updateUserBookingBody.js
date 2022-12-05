import * as variable from "../util/variables";
import * as preRequest from "../bodies/preRequest";

export const updateUserBookingBody = {
    firstname : variable.myName,
    lastname : variable.myLastName,
    totalprice : preRequest.priceUpdated,
    depositpaid : true,
    bookingdates : {
        checkin : preRequest.checkin,
        checkout : preRequest.checkoutUpdated
    },
    additionalneeds : variable.userAdditionalRequest
}