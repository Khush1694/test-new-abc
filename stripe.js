
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const firstName = "John";
const lastName = "Doe";
const email = "john@email.com";
const password = "1234567878899765";
const middlename = "Berg";
const payslip = "filePath";


const user = {
    firstName,
    lastName,
    email,
    password,
    middlename,
    payslip
};

const customer = await stripe.customers.create({
    name: `${user.firstName} ${user.middlename} ${user.lastName}`,
    email: user.email,
    description: "My First Test Customer (created for API docs)",
    address: {
        line1: "510 Townsend St",
        postal_code: "98140",
        city: "San Francisco",
        state: "CA",
        country: "US"
    }
});
