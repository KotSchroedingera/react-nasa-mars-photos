import React from 'react'; 
import { LazyLoadImage } from 'react-lazy-load-image-component';


export const ImgLazy = ({ ...img }) => {
  const { img_src } = img;

  return (
  <div>
    <LazyLoadImage
      src={img_src} // use normal <img> attributes as props
      width={500} />
  </div>
  )
}
