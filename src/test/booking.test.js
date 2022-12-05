import {createAuthBody} from "../bodies/createAuthBody";
import {auth} from "../httpMethods/auth";
import {getBookingIds} from "../httpMethods/getBookingIds";
import {getBookingInfo} from "../httpMethods/getBookingInfo";
import {createBookingBody} from "../bodies/createBookingBody";
import {createBooking} from "../httpMethods/createBooking";
import * as requestData from "../bodies/preRequest";
import * as variable from "../util/variables";
import {updateUserBooking} from "../httpMethods/updateUserBooking";
import {updateUserBookingBody} from "../bodies/updateUserBookingBody";
import {patchUserBooking} from "../httpMethods/patchUserBooking";
import {patchUserBookingBody} from "../bodies/patchUserBookingBody";
import {deleteUserBooking} from "../httpMethods/deleteUserBooking";
import {getDeletedBookingInfo} from "../httpMethods/getDeletedBookingInfo";

export let token;
export let bookingId;

describe("authentication to restful booker api", () => {
    let response;

    beforeAll(async () => {
        response = await auth(createAuthBody,variable.content);
    })

    afterAll(async () =>{
        token = response.data.token;
    })

    test("status code is 200", async() => {
        await expect(response.status).toEqual(200);
    })

    test("status text is OK", async () =>{
        await expect(response.statusText).toEqual("OK");
    });
})

describe("get all booking ids", () => {
    let response;

    beforeAll(async () => {
        response = await getBookingIds(variable.content);
    })

    test("status code is 200", async() => {
        await expect(response.status).toEqual(200);
    })

    test("status text is OK", async () =>{
        await expect(response.statusText).toEqual("OK");
    });
})

describe("Create a booking", () => {
    let bookingResponse;

    beforeAll(async () => {
        bookingResponse = await createBooking(createBookingBody,variable.content);
    })

    afterAll(async () =>{
        bookingId = bookingResponse.data.bookingid;

    })
    test("Status code is 200", async() => {
        await expect(bookingResponse.status).toEqual(200);
    })

    test("Status text is OK", async () =>{
        await expect(bookingResponse.statusText).toEqual("OK");
    });

    test("Check In date is equal expected value", async () => {
        await expect(bookingResponse.data.booking.bookingdates.checkin).toEqual(requestData.checkin);
    })

    test("Check Out date is equal expected value", async () => {
        await expect(bookingResponse.data.booking.bookingdates.checkout).toEqual(requestData.checkout);
    })

    test("Price in response is equal generated value", async () => {
        await expect(bookingResponse.data.booking.totalprice).toEqual(requestData.price);
    })
})


describe("Get info about user booking via id", () => {
    let response;

    beforeAll(async () => {
        response = await getBookingInfo(variable.content);
    })

    test("status code is 200", async() => {
        await expect(response.status).toEqual(200);
    })

    test("status text is OK", async () =>{
        await expect(response.statusText).toEqual("OK");
    });

    test("First Name is equal expected value", async () => {
        await expect(response.data.firstname).toEqual(variable.myName);
    })

    test("Last Name is equal expected value", async () => {
        await expect(response.data.lastname).toEqual(variable.myLastName);
    })

    test("Check In date is equal expected value", async () => {
        await expect(response.data.bookingdates.checkin).toEqual(requestData.checkin);
    })

    test("Check Out date is equal expected value", async () => {
        await expect(response.data.bookingdates.checkout).toEqual(requestData.checkout);
    })

    test("Price in response is equal generated value", async () => {
        await expect(response.data.totalprice).toEqual(requestData.price);
    })

    test("User deposit paid is equal generated value", async () => {
        await expect(response.data.depositpaid).toEqual(true);
    })

    test("Additional User Request is equal generated value", async () => {
        await expect(response.data.additionalneeds).toEqual(variable.userAdditionalRequest);
    })

})

describe("Update user booking via put", () => {
    let response;  
    
    beforeAll(async () => {
        response = await updateUserBooking(updateUserBookingBody,variable.content);
    })

    test("status code is 200", async() => {
        await expect(response.status).toEqual(200);
    })

    test("status text is OK", async () =>{
        await expect(response.statusText).toEqual("OK");
    });

    test("Check Out date is equal expected value", async () => {
        await expect(response.data.bookingdates.checkout).toEqual(requestData.checkoutUpdated);
    })

    test("Price in response is equal generated value", async () => {
        await expect(response.data.totalprice).toEqual(requestData.priceUpdated);
    })
})

describe("Update the part of info via patch", () => {
    let response;  
    
    beforeAll(async () => {
        response = await patchUserBooking(patchUserBookingBody,variable.content);
    })

    test("status code is 200", async() => {
        await expect(response.status).toEqual(200);
    })

    test("status text is OK", async () =>{
        await expect(response.statusText).toEqual("OK");
    });

    test("User additionalneeds is equal expected value", async () => {
        await expect(response.data.additionalneeds).toEqual(variable.userAdditionalRequest);
    })

    test("Deposit paid in response is equal generated value", async () => {
        await expect(response.data.depositpaid).toEqual(true);
    })
})

describe("Delete the part of info via patch", () => {
    let response;  
    
    beforeAll(async () => {
        response = await deleteUserBooking(variable.content);
    })

    test("status code is 201", async() => {
        await expect(response.status).toEqual(201);
    })

    test("status text is Created", async () =>{
        await expect(response.statusText).toEqual("Created");
    });
})

describe("Try to get info about deleted booking", () => {
    let response; 

    beforeAll(async () => {
       try { 
        response = await getDeletedBookingInfo(variable.content);
       } 
       catch (error) {
            response = error;
       }
     
    })

    test("Request failed with status code is 404", async() => {
        await expect(response.response.status).toEqual(404);
    })
    test("Request failed with status text Not Found", async() => {
        await expect(response.response.statusText).toEqual("Not Found");
    })
    
})