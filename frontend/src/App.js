import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen'
import CartScreen from './Screens/CartScreen';
<<<<<<< HEAD
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
=======
>>>>>>> parent of 1c0f4cc (Added login screen, login test successful)

const App = () => {
  return (
      <Router>
      <Header />
        <main className = 'py-3'>
        <Container>
<<<<<<< HEAD
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
=======
          <Route path='/' component={HomeScreen} exact />
>>>>>>> parent of 1c0f4cc (Added login screen, login test successful)
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
        </Container>
        </main>
      <Footer />
      </Router>
  );
}

export default App;
