import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/productContext';
import { FilterContextProvider } from './context/filterContext';
import { CartProvider } from './context/cartContext';
import { AuthProvider } from './context/authContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
 <AppProvider>
  <FilterContextProvider>
    <CartProvider>
    <App />
    </CartProvider>
  
    </FilterContextProvider>
    </AppProvider>
    </AuthProvider>
)
