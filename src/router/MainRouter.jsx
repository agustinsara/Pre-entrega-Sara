import React from 'react';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';

import Home from '../pages/Home';

import { Navbar } from 'react-bootstrap';
import { ProductsCard } from '../component/ProductsCard';
import Category from '../pages/Category';

export const MainRouter = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path='/category/:id' element={Category}/>
      
      </Routes>
    </Router>
  )
}
