import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import CartScreen from './screens/CartScreen'
import HomeScreen from './screens/HomeScreen'

import {CartProvider} from 'react-use-cart'

const App = () => {
  return (
    <Router>
      <CartProvider>
      <Header />
      <section className='container'>
        <Routes>
            <Route path='/' exact element={<HomeScreen/>}/>
            <Route path='/Cart' exact element={<CartScreen/>}/>
        </Routes>
        </section>
        </CartProvider>
    </Router>
  )
}

export default App
