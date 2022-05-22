import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import styledComponents from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styledComponents.div`

`;

const ManifestTable = ({ photos, rover }) => {

  const columns = [
    { field: 'sol', headerName: 'Sol', 
      width: 100, type: 'number', 
      renderCell: sol => <Link to={`/photos/?sol=${sol.value}&name=${rover}`}>{sol.value}</Link>
    },
    { field: 'earth_date', headerName: 'Earth date', type: 'date', width: 130 },
    { field: 'photos', headerName: 'Photos', type: 'number', width: 90 },
    { field: 'cameras', headerName: 'Cameras', width: 300 },
  ];

  const rows = photos.map(elem => ({
    id: elem.sol,
    sol: elem.sol,  
    earth_date: elem.earth_date, 
    photos: elem.total_photos, 
    cameras: elem.cameras.join(', '),
  })); 

  return (
    <Wrapper>
      <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[20, 50, 100, photos.length]}
        disableSelectionOnClick
      />
    </Wrapper>
  );
}; 

export default ManifestTable;