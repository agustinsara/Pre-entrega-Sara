import React from "react";
import {getDocs, getFirestore, collection} from "firebase/firestore"
import { ProductsCard } from "./ProductsCard";
import { useState , useEffect } from "react";


const ItemsListsConteiner =()=>{
   
    const [products, setProducts] = useState([])
    useEffect(()=>{
            const db= getFirestore();
        
        const productsColletion = collection(db , "ProductsData")
            getDocs(productsColletion).then((snapshot) => {
              setProducts(
                snapshot.docs.map((doc)=> ({id: doc.id, ...doc.data()}))
              )
             
            })
        
    },[])
return(
<div>
     
    {
        products.map(product => {
            return(

              <ProductsCard key={product.id} ProductsData={product}/>)
        })
    }
</div>

)
    
   


}
export default ItemsListsConteiner;