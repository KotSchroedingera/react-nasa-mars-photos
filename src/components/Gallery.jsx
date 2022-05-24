import React from 'react'; 
import roverStore from '../store/store';
import { observer } from 'mobx-react-lite';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import styledComponents from 'styled-components';

const Wrapper = styledComponents.div``; 
const ImageListStyled = styledComponents(ImageList)`
  width: 100%;
  gap: 1rem !important;
  margin-bottom: 1rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr !important;
  }
`;

const Gallery = observer(() => {

  if (!roverStore.currentPhotos) return <div>Loading photos, please wait</div>
  if (!roverStore.currentPhotos.length) return <div>No photos. Please, change filter options.</div>
  
  return (
    <Wrapper>
      <ImageListStyled cols={2} rowHeight='auto'>
        {roverStore.currentPhotos.map(elem => (
          <ImageListItem key={elem.id}>
            <img
              src={`${elem.img_src.replace('http', 'https')}?w=164&h=164&fit=crop&auto=format`}
              width='100%'
              alt={elem.id}
              loading="lazy"
            />
            <ImageListItemBar
              title={elem.camera.full_name}
              subtitle={elem.earth_date}
            />
          </ImageListItem>
        ))}
      </ImageListStyled>
    </Wrapper>
  )
});

export default Gallery;
