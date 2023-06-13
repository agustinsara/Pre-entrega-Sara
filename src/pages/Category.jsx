import React from 'react'
import ItemsListsConteiner from '../component/ItemsListsConteiner'
import {useParams} from "react-router-dom";
import { ProductsData } from '../json/Products';
export default function Category() {
    const {id} = useParams()
    const productsFilterdByCategory = ProductsData.filter(product=>product.id === id);
  return (
<div><ItemsListsConteiner categoryProducts={productsFilterdByCategory}/></div>
  )
}
