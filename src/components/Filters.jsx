import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react'
import roverStore from '../store/store';
import { observer } from 'mobx-react-lite';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, Button, ButtonGroup, Typography } from '@mui/material';
import styledComponents from 'styled-components';


const Wrapper = styledComponents.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1rem;
  @media (max-width: 600px) {
    justify-content: space-between;
  }
`; 

const SolFilterWrapper = styledComponents.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Filters = observer(() => {

  const [searchParams, setSearchParams] = useSearchParams();

  const [sol, setSol] = useState(searchParams.get('sol'));
  const [name, setName] = useState(searchParams.get('name'));

  useEffect(() => {
    setSearchParams({ ...searchParams, sol, name });
    if (!roverStore.manifest(name)) roverStore.fetchManifest(name);
  }, [sol, name]);

  useEffect(() => {
    roverStore.setFilter('name', searchParams.get('name'));
    roverStore.setFilter('sol', searchParams.get('sol'));
    roverStore.fetchFilteredPhotos()
  }, [searchParams]);

  if (!roverStore.manifest(searchParams.get('name'))) return;

  return (
    <Wrapper>
      <SolFilterWrapper>
        <FormLabel htmlFor='sol'>Sol (martian day)
          from {roverStore.manifest(searchParams.get('name')).photos[0].sol} to {roverStore.manifest(searchParams.get('name')).max_sol}</FormLabel>
        <TextField
          id="sol" 
          label="Enter sol" 
          type='number'
          value={sol}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={evt => {
            setSol(evt.target.value)
          }} />
        <FormLabel>
          {roverStore.currentPhotos.length} photos this sol 
        </FormLabel>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button
            onClick={evt => setSol(+sol - 1)}
          >previous sol</Button>
          <Button
             onClick={evt => setSol(+sol + 1)}
          >next sol</Button>
        </ButtonGroup>
      </SolFilterWrapper>
      <FormControl>
        <FormLabel id="row-radio-buttons-group-label">Rover</FormLabel>
        <RadioGroup
          aria-labelledby="row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={evt => {
            setName(evt.target.value)
          }}
        >
          <FormControlLabel value="Opportunity" control={<Radio />} label="Opportunity" checked={searchParams.get('name') === 'Opportunity'}/>
          <FormControlLabel value="Curiosity" control={<Radio />} label="Curiosity" checked={searchParams.get('name') === 'Curiosity'}/>
          <FormControlLabel value="Spirit" control={<Radio />} label="Spirit" checked={searchParams.get('name') === 'Spirit'}/>
        </RadioGroup>
      </FormControl>
    </Wrapper>
  )
}
)