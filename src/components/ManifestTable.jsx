import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

export const ManifestTable = ({ photos, rover }) => {

  const rows =  photos.map(elem => {
    return { 
      sol: elem.sol, 
      earth_date: elem.earth_date, 
      total_photos: elem.total_photos, 
      cameras: elem.cameras.join(' ') };
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sol</TableCell>
            <TableCell align="right">Earth date</TableCell>
            <TableCell align="right">Total Photos</TableCell>
            <TableCell align="right">Cameras</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.sol}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to={`/photos?name=${rover}&sol=${row.sol}`}>
                  {row.sol}
                </Link>
              </TableCell>
              <TableCell align="right">{row.earth_date}</TableCell>
              <TableCell align="right">{row.total_photos}</TableCell>
              <TableCell align="right">{row.cameras}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}; 
