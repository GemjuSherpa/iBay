import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'
import HomeScreen from './components/HomeScreen'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'

const App = () => {
  return (
    <Router>
        <Header/>
        
        
          <main className='py-3'>
            <Container>            
              <Route path="/" component={HomeScreen} exact></Route>
              <Route path ="/product/:id" component={ProductScreen}></Route>
              <Route path ="/cart/:id?" component={CartScreen}></Route>
              <Route path="/login" component={LoginScreen}></Route>
            </Container> 
          </main>
          
          <Footer/>
          
        
    </Router>
  )
}

export default App;
