import React from "react";
import { ProductsCard } from "./ProductsCard";
import { ProductsData } from "../json/Products";


const ItemsListsConteiner =({categoryProducts})=>{
const productsToShow = categoryProducts ? categoryProducts : ProductsData ;
return(
<div>
     
    {
        productsToShow.map(product => {
            return(

              <ProductsCard key={product.id} productData={product}/>            )
        })
    }
</div>

)
    
   


}
export default ItemsListsConteiner;