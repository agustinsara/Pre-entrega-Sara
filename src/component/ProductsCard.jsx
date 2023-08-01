import React from 'react'
import { Link } from 'react-router-dom'

export const ProductsCard = ({ProductsData}) => {
 
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{ProductsData.title}</h5>
        <Link to={`/item/${ProductsData.id}`} className="btn btn-primary">Ir al Producto</Link>
      </div>
    </div>
  )
}
