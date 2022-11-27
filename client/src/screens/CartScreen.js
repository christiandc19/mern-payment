import React from 'react'
import CartCards from '../components/CartCards'
import { useCart } from 'react-use-cart'

const CartScreen = () => {
  const {isEmpty, items} = useCart();

  const calculatePrice = () => {
    let totalPrice = items.reduce((acc, item) => acc + item.itemTotal ,0);
    return Math.trunc(totalPrice);
}

  if (isEmpty) return <p className='text-center display-5 fw-bold mt-3'>Your cart is empty, go back to shop</p>

  return (
    <div>
        <div className='row d-flex justify-content-between'>
            <div className='col-12 col-md-8'>
                {
                  items.map(item => <CartCards item={item}/> )
                }
            </div>

            <div className='col-12 col-md-4'>
                <div className='list-group'>
                  <li className='list-group-item fw-bold'>Price: ${calculatePrice()}</li>
                  <li className='list-group-item'>
                    <button className='btn btn-primary w-100'>Checkout</button>
                  </li>
                </div>
                Price Card
            </div>

        </div>
    </div>
  )
}

export default CartScreen