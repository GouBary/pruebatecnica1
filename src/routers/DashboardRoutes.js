import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../components/Cart'
import Crud from '../components/Crud'
import Home from "../components/Home"
import Itemcard from '../components/Itemcard'
import Login from '../components/Login'
import NavBars from '../components/NavBars'
import RegisterUser from '../components/RegisterUser'



const DashboardRoutes = () => {
    return (
        <>
            <NavBars />
            <Routes>
            <Route path='/*' element={<Home/>}/>
            <Route path='/Register' element={<RegisterUser/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/Cart' element={<Cart/>}/>
           <Route path='/itemC' element={<Itemcard/>}/>
           <Route path='/Crud' element={<Crud/>}/>
          </Routes>
        </>
    )
}

export default DashboardRoutes;