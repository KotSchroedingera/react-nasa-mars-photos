import React from 'react'
import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import PhotoPage from './pages/PhotoPage';
import { Footer } from './components/Footer';
import { MainPage } from './pages/MainPage';
import { RoverPage } from './pages/RoverPage';
import { CssBaseline } from '@mui/material';
import styledComponents from 'styled-components';

const Container = styledComponents.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

const App = () => {

  return (
    <>
      <CssBaseline />
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/photos/' element={<PhotoPage />} />
          <Route path='/rover/:rover' element={<RoverPage />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );

}; 

export default App;
