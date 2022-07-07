import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBars from "../components/NavBars"
import RegisterUser from '../components/RegisterUser';
import Home from "../components/Home"
import Login from '../components/Login';
import Cart from "../components/Cart"
import Itemcard from '../components/Itemcard';
import Crud from '../components/Crud';



export default function AppRouters() {
  return (
    <BrowserRouter>
      <NavBars/>
      <Routes>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/' element={<RegisterUser/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/itemC' element={<Itemcard/>}/>
            <Route path='/Crud' element={<Crud/>}/>
      </Routes>
    
    </BrowserRouter>
   
  )
}
