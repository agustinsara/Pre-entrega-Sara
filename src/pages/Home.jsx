import React from 'react'
import ItemsListsConteiner from "../component/ItemsListsConteiner.jsx";
import  Navbar from '../component/NavBar';
import { ProductsData } from '../json/Products.js';
function Home() {
  return (
    <div> 
      <Navbar></Navbar>
    <ItemsListsConteiner ProductsData={ProductsData}/></div>

  )
}

export default Home