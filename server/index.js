const express = require ('express');
const app = express();
const PORT = 1234
const cors = require('cors');
const stripe = require('stripe')(pk_test_51M8bTIHk8AyJfOFBv7qlE5N5HTSJIesrSMyBFNZ3h2tUWcWKvXqSItFJeX4IBxqWdsfUBYrKrpyOX721lYq0IUvG0005tFjVyH);
const {v4:uuid} = require ('uuid');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('This works fine')
})

app.post('/payment', async (req, res) => {
    let status;
    try {
        const {items, token, totalPrice} = req.body;
        // the idempontencyKey of uuid is used to provide a unique id for each transaction to avoid double charges.
        const idempotencyKey = uuid(); 
    
        // Create a customer
        const customer = await stripe.customer.create({
            email: token.email,
            source: token.id
        })
    
        // Create charges
        const charges = await stripe.charges.create({
            amount: totalPrice,
            currency: 'USD',
            customer: customer.id,
            receipt_email: token.email,
            description: `Purchase the ${items.name}`,
            shipping: {
                name: token.card.name,
                address: {
                    country: token.card.address_country
                }
            }
        }, {idempotencyKey}); 
        status = 'Payment Succesfull';
        console.log({charges});
    } catch (error) {
        status = 'Payment Failed'
        console.log('error.message');
    }
    res.json(status)
})

app.listen(PORT, () => {
    console.log('Server is Running')
})