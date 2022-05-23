import React from 'react'; 
import { lazy } from 'react';
import { Suspense } from 'react';
import { Filters } from '../components/Filters';
import { ContainerStyled } from '../components/ContainerStyled';

const GalleryLazy = lazy(() => import('../components/Gallery'));


const PhotoPage = () => {
  
  return (
    <ContainerStyled>
      <Filters />
      <Suspense fallback='loading'>
        <GalleryLazy />
      </Suspense>
    </ContainerStyled>
  )
}; 

export default PhotoPage;
