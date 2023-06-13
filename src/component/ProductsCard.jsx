import React from 'react'

export const ProductsCard = ({productData}) => {
  return (
    <div class="card">
  <div class="card-body">
    <h5 class="card-title">{productData.name}</h5>
    <p class="card-text">{productData.decription}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
}
