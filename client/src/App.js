import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'
import HomeScreen from './components/HomeScreen'

const App = () => {
  return (
    <>
        <Header/>
        <Container>
        
          <main>
            <HomeScreen></HomeScreen>
          </main>
          <Footer/>
          
        </Container> 
    </>
  )
}

export default App;
