import React from 'react'
import { Link } from 'react-router-dom'
export const ProductsCard = ({productData}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{productData.name}</h5>
        <Link to={`/item/${productData.id}`} className="btn btn-primary">Ir al Producto</Link>
      </div>
    </div>
  )
}
