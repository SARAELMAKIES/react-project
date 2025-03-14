

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Provider } from "react-redux";
import List from './pages/List';
import Cart from './pages/Cart';
import axios from "axios";
import OneItem from './component/OneProduct';
import NavBar from './component/NavBar';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import FormProduct from './pages/FormProduct';
import { ShowDetails } from './component/ShowDetails';

import OrderForm from './pages/OrderForm';
function App() {

  return (
    <>
      <NavBar />
      <Routes>
        
   
    <Route path="/order-form" element={<OrderForm/>} />

        <Route path="/FormProduct" element={<FormProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/" element={<List />} >
          <Route path="details/:id" element={<ShowDetails />} />
        </Route>
      </Routes >
    </>
  );
}

export default App;




