import React from 'react'

const ProductCard = ({product}) => {
  const {title, price, image} = product;
  return (
<div className="card">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="badge bg-success rounded-0 fs-6 fw-bold">Price: {Math.trunc(price)} </p>
          <button className="btn btn-primary w-100">Add To Cart</button>
        </div>
</div>
  )
}

export default ProductCard