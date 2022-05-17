import React, { useEffect } from 'react'
import { roversMb } from './store/store';
import { observer } from 'mobx-react-lite';
import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { PhotoPage } from './pages/PhotoPage';
import { Footer } from './components/Footer';
import { MainPage } from './pages/MainPage';
import { RoverPage } from './pages/RoverPage';

import roversStore from './store/store';
console.log(roversStore.quantity);

const App = () => {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='photos' element={<PhotoPage />} />
        <Route path='/rover/:rover' element={<RoverPage></RoverPage>} />
      </Routes>
      <Footer />
    </div>
  );

}; 

export default observer(App);
