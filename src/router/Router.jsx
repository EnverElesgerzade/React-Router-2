import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Basket from '../pages/Basket'
import Favorites from '../pages/Favorites'
import NotFound from '../components/NotFound'

const Router = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/' element={<Basket/>} /> 
        <Route path='/' element={<Favorites/>} /> 


     </Routes>
     <Route path='*' element={<NotFound/>} /> 
       
    </BrowserRouter>
  )
}

export default Router
