import React from "react";
import { ProductsCard } from "./ProductsCard";
import { ProductsData } from "../json/Products";

const ItemsListsConteiner =({categoryProducts})=>{

return(
<div>
    {
        ProductsData.map(product => {
            return(
              <ProductsCard key={product.id} productData={product}/>            )
        })
    }
</div>

)
    
   


}
export default ItemsListsConteiner;