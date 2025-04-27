import React from 'react'
import { Route, Routes } from 'react-router'
import CartPage from '../Pages/CartPage'
import HomePage from '../Pages/HomePage'
import CategoryPage from '../Pages/CategoryPage'
import ProductDetailsPage from '../Pages/ProductDetailsPage'

const AdminRoute = () => {
  return (
    <>
    <div className="">
      <Routes>
        <Route path='/home' element={<HomePage />} /> 
        <Route path='/category' element={<CategoryPage />} /> 
        <Route path='/product-details' element={<ProductDetailsPage />} />   
        <Route path='/cart-page' element={<CartPage />} />
      </Routes>
      </div>
    </>
  )
}

export default AdminRoute