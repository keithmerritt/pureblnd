import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeScreen from './Screens/HomeScreen';

const App = () => {
  return (
    <div className="App">
      <Header />
        <main className = 'py-3'>
        <Container>
          <HomeScreen />
        </Container>
        </main>
      <Footer />
    </div>
  );
}

export default App;
