import React from 'react'; 
import roverStore from '../store/store';
import { observer } from 'mobx-react-lite';
import { ImageList, ImageListItem } from '@mui/material';
import styledComponents from 'styled-components';


const Wrapper = styledComponents.div``; 

const Gallery = observer(() => {

  if (!roverStore.currentPhotos) return <div>Loading photos, please wait</div>
  if (!roverStore.currentPhotos.length) return <div>No photos. Please, change filter options.</div>
  
  return (
    <Wrapper>
      <ImageList sx={{ width: '100%' }} cols={2} rowHeight='auto'>
        {roverStore.currentPhotos.map(elem => (
          <ImageListItem key={elem.id}>
            <img
              src={`${elem.img_src}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${elem.img_src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              width='100%'
              alt={elem.id}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Wrapper>
  )
})


export default Gallery;
