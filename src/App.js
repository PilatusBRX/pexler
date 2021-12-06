import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes} from './routes';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
const App = () => {
  return (
    <>
    <main>
      <div className="container">               
        <BrowserRouter>
        <Navbar/>
          <Routes/>
          <Footer/>
        </BrowserRouter>       
      </div>
    </main>
    </>
  );
}

export default App;

