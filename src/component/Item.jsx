import React from 'react'
import { ItemDetailConteiner } from './ItemDetailConteiner'
import { ProductsData } from '../json/Products'
import { useParams } from 'react-router-dom'
export const Item = () => {
  
    const {itemId} = useParams()
    
    const productsFilterdById = ProductsData.find(product=>product.id === itemId);
     
    return (
  <div><ItemDetailConteiner product={productsFilterdById}/></div>)
  
  
}
