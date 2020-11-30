import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'

const App = () => {
  return (
    <>
        <Header/>
        <Container>
        
          <main>
            Welcom!
          </main>
          <Footer/>
          
        </Container> 
    </>
  )
}

export default App;
