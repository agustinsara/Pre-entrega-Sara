import React from 'react'
import { ItemDetailConteiner } from './ItemDetailConteiner'
import {getDocs, getFirestore, collection} from "firebase/firestore"
import { useParams } from 'react-router-dom'
import { useState , useEffect } from "react"; 
export const Item = () => {
  

    
  const {itemId} = useParams()
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
   
  const productsFilterdById = products.find(product=>product.id === itemId);
     
    return (
  <div><ItemDetailConteiner product ={productsFilterdById}/></div>)
  
  
}
