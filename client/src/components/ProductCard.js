import React from 'react'
import {useCart} from 'react-use-cart'

const ProductCard = ({product}) => {
  const {title, price, image} = product;
  const {addItem} = useCart()

  return (
<div className="card">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="badge bg-success rounded-0 fs-6 fw-bold">Price: {Math.trunc(price)} </p>
          <button onClick={() => addItem (product)}  className="btn btn-primary w-100">Add To Cart</button>
        </div>
</div>
  )
}

export default ProductCard