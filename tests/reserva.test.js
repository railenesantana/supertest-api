const request = require("supertest");
const ApiUrl = "https://restful-booker.herokuapp.com";


it("Deve retornar 200 ao fazer um GET em booking", () => {
    return request(ApiUrl)
        .get("/booking")
        .expect(200)
});

it("Deve retornar 200 ao fazer um GET em booking ID", () => {
    return request(ApiUrl)
        .get("/booking/143")
        .expect(200)
        .set('Accept', 'application/json')
        .then(response => {
            expect(response.body.firstname).toEqual("John");
            expect(response.body.lastname).toEqual("Smith");
            expect(response.body.totalprice).toEqual(111);
            expect(response.body.depositpaid).toBeTruthy();
        });
});


