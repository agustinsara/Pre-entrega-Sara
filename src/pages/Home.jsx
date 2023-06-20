import React from 'react'
import ItemsListsConteiner from "../component/ItemsListsConteiner.jsx";

import { ProductsData } from '../json/Products.js';
function Home() {
  return (
    <div> 
      
    <ItemsListsConteiner ProductsData={ProductsData}/></div>

  )
}

export default Home