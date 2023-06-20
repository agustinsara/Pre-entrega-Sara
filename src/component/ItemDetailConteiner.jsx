import React from 'react'
import { ProductsCard } from './ProductsCard'
import { ProductsData } from '../json/Products'

export const ItemDetailConteiner = ({product}) => {
  return (
    <div className="card">
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
       <p>{product.description}</p>
    </div>
  </div>
  )
}
