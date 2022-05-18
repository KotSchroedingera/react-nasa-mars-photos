import React, { useEffect } from 'react'; 
import { observer } from 'mobx-react-lite';
import { useSearchParams } from 'react-router-dom';
import roverStore from '../store/store';
import { ImgLazy } from '../elements/ImgLazy';
import { Link } from 'react-router-dom';


export const PhotoPage = observer(() => {
  
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    roverStore.fetchPhotosBySol({
      name: searchParams.get('name'), 
      sol: searchParams.get('sol'), 
      camera: searchParams.get('camera'), 
    });
  }, [searchParams]);

  return (
    <div>
      <div>
        <Link to={`/rover/${searchParams.get('name')}`}>Back to {searchParams.get('name')}</Link>
      </div>
      <div>
        <h1>Photos</h1>
        <p>Filter rover: {searchParams.get('name')}</p>
        <p>Filter sol: {searchParams.get('sol')}</p>
        <p>Filter earth date</p>
        <p>Filter camera</p>
        <p>Page: {searchParams.get('page')}</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {roverStore.currentPhotos.map(elem => <ImgLazy 
          key={elem.id} {...elem}></ImgLazy>)}
      </div>
    </div>
  )
})
