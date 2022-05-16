import React, { useEffect } from 'react'
import { RoversInfo } from './components/RoversInfo'; 
import { PhotoInfo } from './components/PhotoInfo';
import { Rovers } from './store/counter';
import { observer } from 'mobx-react-lite';

export const roversMb = new Rovers();


const App = () => {

  useEffect(() => {
    roversMb.getRovers();
  }, []);

  return (
    <div>
      <RoversInfo data={roversMb.rovers} />
      <hr />
      <PhotoInfo />
    </div>
  );

}; 

export default observer(App);
