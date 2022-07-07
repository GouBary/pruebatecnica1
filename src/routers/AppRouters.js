import React, { useEffect, useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import RegisterUser from '../components/RegisterUser';
import Login from '../components/Login';
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import { PrivateRouters } from './PrivateRouters';
import { PublicRouters } from './PublicRouters';
import DashboardRoutes from './DashboardRoutes';





export default function AppRouters() {

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

 useEffect(()=>{
    const auth=getAuth();
    onAuthStateChanged(auth,(user)=>{
      if(user?.uid){
        setIsLoggedIn(true)
          
      }
      else{
        setIsLoggedIn(false)
      }
      setChecking(false)
    })
 },[setIsLoggedIn, setChecking])
  
  return (
    // <BrowserRouter>
    //   <NavBars/>
    //   <Routes>
    //         <Route path='/Home' element={<Home/>}/>
    //         <Route path='/' element={<RegisterUser/>}/>
    //         <Route path='/login' element={<Login/>}/>
    //         <Route path='/Cart' element={<Cart/>}/>
    //         <Route path='/itemC' element={<Itemcard/>}/>
    //         <Route path='/Crud' element={<Crud/>}/>
    //   </Routes>
    
    // </BrowserRouter>
    
      <>
          <BrowserRouter>
              <Routes>
               <Route path="/register" element={
                      <PublicRouters isAutentica={isLoggedIn}>
                          <RegisterUser />
                      </PublicRouters>

                  } />
                  <Route path="/login" element={
                      <PublicRouters isAutentica={isLoggedIn}>
                          <Login/>
                      </PublicRouters>

                  } />

                
                  <Route path="/*" element={
                      <PrivateRouters isAutentica={isLoggedIn}>
                          <DashboardRoutes />
                      </PrivateRouters>
                  } />
              </Routes>
          </BrowserRouter>

      </>
  );
   
  
}
