import React from 'react'
import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import PhotoPage from './pages/PhotoPage';
import { Footer } from './components/Footer';
import { MainPage } from './pages/MainPage';
import { RoverPage } from './pages/RoverPage';
import { CssBaseline } from '@mui/material';

const App = () => {

  return (
    <>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/photos/' element={<PhotoPage />} />
        <Route path='/rover/:rover' element={<RoverPage />} />
      </Routes>
      <Footer />
    </>
  );

}; 

export default App;
