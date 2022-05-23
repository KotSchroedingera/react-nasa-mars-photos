import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react'
import roverStore from '../store/store';
import { observer } from 'mobx-react-lite';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField } from '@mui/material';
import styledComponents from 'styled-components';

const Wrapper = styledComponents.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 1rem;
  justify-content: space-evenly;
  margin: 1rem 0;
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
  }, [sol, name]);

  useEffect(() => {
    roverStore.setFilter('name', searchParams.get('name'));
    roverStore.setFilter('sol', searchParams.get('sol'));
    roverStore.setFilter('earth_date', searchParams.get('earth_date'));
    roverStore.setFilter('cameras', searchParams.get('cameras'));
    roverStore.fetchFilteredPhotos()
  }, [searchParams]);

  return (
    <Wrapper>
      <FormControl>
        <FormLabel id="row-radio-buttons-group-label">Rover</FormLabel>
        <RadioGroup
          aria-labelledby="row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={evt => {
            setName(evt.target.value)
          }}
        >
          <FormControlLabel value="opportunity" control={<Radio />} label="Opportunity" />
          <FormControlLabel value="curiosity" control={<Radio />} label="Curiosity" />
          <FormControlLabel value="spirit" control={<Radio />} label="Spirit" />
        </RadioGroup>
      </FormControl>
      <SolFilterWrapper>
        <FormLabel htmlFor='sol'>Sol (martian day)</FormLabel>
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
      </SolFilterWrapper>
    </Wrapper>
  )
}
)