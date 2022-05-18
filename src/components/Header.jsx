import React from 'react'; 
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <div>
      <p>Header</p>
      <Link to={'/'}>Go to main</Link>
      <hr />
    </div>
  )
}
