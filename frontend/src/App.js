import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router , Route} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'


function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'> 
        <Container>
          < Route path='/' component={ HomeScreen } exact />
          < Route path='/product/:id' component={ ProductScreen } />
          < Route path='/cart/:id?' component={ CartScreen } />
          < Route path='/login' component={ LoginScreen } />
          < Route path='/register' component={ RegisterScreen } />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
