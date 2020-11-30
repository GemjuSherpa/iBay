import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'
import HomeScreen from './components/HomeScreen'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <Router>
        <Header/>
        <Container>
        
          <main>
            <Route path="/" component={HomeScreen} exact></Route>
            <Route path ="/product/:id" component={ProductScreen}></Route>
          </main>
          <Footer/>
          
        </Container> 
    </Router>
  )
}

export default App;
