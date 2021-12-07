import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes} from './routes';
import GalleryContextProvider from './contexts/GalleryContext';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
const App = () => {
  return (
    <GalleryContextProvider>
    <main>
      <div className="container">               
        <BrowserRouter>
        <Navbar/>
          <Routes/>          
          <Footer/>
        </BrowserRouter>           
      </div>
    </main>
    </GalleryContextProvider>
  );
}

export default App;

