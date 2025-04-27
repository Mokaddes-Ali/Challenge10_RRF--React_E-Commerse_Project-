import React from 'react'
import Header from '../Components/Frontend/Home/Header'
import Footer from '../Components/Frontend/Home/Footer'
import { Route, Routes } from 'react-router'
import CartPage from '../Pages/CartPage'
import HomePage from '../Pages/HomePage'
import CategoryPage from '../Pages/CategoryPage'
import ProductDetailsPage from '../Pages/ProductDetailsPage'

const WebRoute = () => {
  return (
    <>
    <div className="">
        <Header />
    </div>
      
      <Routes>
        <Route path='/' element={<HomePage />} /> 
        <Route path='/category' element={<CategoryPage />} /> 
        <Route path='/product-details' element={<ProductDetailsPage />} />   
        <Route path='/cart-page' element={<CartPage />} />
      </Routes>
      <div className="">
        <Footer />
    </div>
    </>
  )
}

export default WebRoute