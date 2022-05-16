import React, { useEffect } from 'react'
import { RoversInfo } from './components/RoversInfo'; 
import { Rovers } from './store/store';
import { observer } from 'mobx-react-lite';

export const roversMb = new Rovers();


const App = () => {

  useEffect(() => {
    roversMb.getRovers();
  }, []);

  return (
    <div>
      <RoversInfo data={roversMb.rovers} />
    </div>
  );

}; 

export default observer(App);
