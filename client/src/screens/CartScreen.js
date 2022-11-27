import React from 'react'
import CartCards from '../components/CartCards'
import { useCart } from 'react-use-cart'
import StripeCheckout from 'react-stripe-checkout'

const CartScreen = () => {
  const {isEmpty, items} = useCart();

  const calculatePrice = () => {
    let totalPrice = items.reduce((acc, item) => acc + item.itemTotal ,0);
    return Math.trunc(totalPrice);
}

  const makePayment = async (token) => {
    const body = {
      items,
      totalPrice: calculatePrice(),
      token
    }
    try {
      const response = await fetch('https://localhost:1234/payment', {
        method: 'POST',
        headers: {
          'content-type': 'application.json'
        },
        body: JSON.stringify(body)
      })
      const jsonObj = await response.json();
      return jsonObj;
    } catch (error) {
      console.log(error.message)
    }
  }

  if (isEmpty) return <p className='text-center display-5 fw-bold mt-3'>Your cart is empty, go back to shop</p>

  return (
    <div>
        <div className='row d-flex justify-content-between'>
            <div className='col-12 col-md-8'>
                {
                  items.map((item, index) => <CartCards item={item} key={index}/> )
                }
            </div>

            <div className='col-12 col-md-4'>
                <div className='list-group'>
                  <li className='list-group-item fw-bold'>Price: ${calculatePrice()}</li>
                  <li className='list-group-item'>
                    <StripeCheckout 
                    token={makePayment} 
                    name={`Pay ${calculatePrice()} $ Amount`}
                    stripeKey='pk_test_51M8bTIHk8AyJfOFBaJaVnLOyKVCa6qVqmgK13Xr54ujyNCMiuUYnBZ8UJRLUJ4Hj3WNkTSHYU9Ryb93KbGyFXOJM00ycyGeIOu'
                    >
                    <button className='btn btn-primary w-100'>Checkout</button>
                    </StripeCheckout>
                  </li>
                </div>
            </div>

        </div>
    </div>
  )
}

export default CartScreen