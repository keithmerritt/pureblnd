import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
        <main>
        <Container>
          <h1>Pureblnd</h1>
        </Container>
        </main>
      <Footer />
    </div>
  );
}

export default App;
