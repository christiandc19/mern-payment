import React from 'react'
import { useCart } from 'react-use-cart';

const CartCards = ({item}) => {
  const {id, image, itemTotal, quantity, title} = item;
  const {
      updateItemQuantity,
      removeItem
  } = useCart();

  return (
  <div className="card-cart mb-3 rounded-0 w-100">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={image} className="img-fluid rounded-start" alt={title}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text"><small className="badge bg-success rounded-0">Price: ${itemTotal}</small></p>
        <div className='form-control rounded-0 d-flex justify-content-between'>
          <button onClick={() => {
            updateItemQuantity(id, quantity - 1)
          }}
          className='btn btn-primary rounded-0 w-25'>
            -
          </button>

            <p>{quantity}</p>

            <button onClick={() => {
            updateItemQuantity(id, quantity + 1)
          }}
            className='mt-3 btn btn-primary rounded-0 w-25'>
            +
          </button>
        </div>
          <button onClick={() => removeItem(id)}
          className='btn btn-danger rounded-0 w-100'>Remove From Cart</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default CartCards
