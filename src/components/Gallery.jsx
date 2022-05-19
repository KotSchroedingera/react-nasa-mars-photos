import { observer } from 'mobx-react-lite';
import React from 'react'; 
import roverStore from '../store/store';


const Gallery = observer(() => {
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {roverStore.currentPhotos.map(elem => 
          <div key={elem.id} {...elem}>
            <img src={elem.img_src} width='500px' alt={elem.img_src} />
          </div>)}
      </div> 
    </>
  )
});


export default Gallery;
