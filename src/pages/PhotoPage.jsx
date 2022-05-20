import React, { useEffect } from 'react'; 
import { useSearchParams } from 'react-router-dom';
import roverStore from '../store/store';
import { Link } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';
import { Filters } from '../components/Filters';

const GalleryLazy = lazy(() => import('../components/Gallery'));


const PhotoPage = () => {
  
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <div>
        <Link to={`/rover/${searchParams.get('name')}`}>Back to {searchParams.get('name')}</Link>
      </div>
      <Filters />
      <Suspense fallback='loading'>
        <GalleryLazy />
      </Suspense>
    </div>
  )
}; 

export default PhotoPage;
