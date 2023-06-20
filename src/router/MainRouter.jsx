import React from 'react';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';

import Home from '../pages/Home';


import { ProductsCard } from '../component/ProductsCard';
import Category from '../pages/Category';
import NavBar from '../component/NavBar';
import { Item } from '../component/Item';

export const MainRouter = () => {
  return (
    <Router>
       <NavBar></NavBar>
      <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path='/category/:id' element={<Category/>}/>
      <Route exact path='/item/:itemId' element={<Item/>}/>
      </Routes>
    </Router>
  )
}
