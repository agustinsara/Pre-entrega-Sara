import React from 'react'



export const ItemDetailConteiner = ({product}) => {
  return (
    <div className="card">
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
       <p>{product.description}</p>
    </div>
  </div>
  )
}
