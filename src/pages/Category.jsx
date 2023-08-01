import React from 'react'
import ItemsListsConteiner from '../component/ItemsListsConteiner'
import {getDocs, getFirestore, collection} from "firebase/firestore"
import { useState ,useEffect } from 'react';
import {useParams} from "react-router-dom";

export default function Category() {
    const {id} = useParams()
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
    
    const productsFilterdByCategory = products.filter(product=>product.category === id);
     
    return (
  <div><ItemsListsConteiner categoryProducts={productsFilterdByCategory}/></div>)
  
}
