import axios from 'axios';
import config from './api.config';


export const createRoverInfoUrl = (roverName) => {
  if (!config.rovers.includes(roverName.toLowerCase())) {
    console.error(`"${roverName}" - there is no such rover.`);
    return false;
  }
  return `${config.baseUrl}/rovers/${roverName}`
}; 

export const getRoverInfo = async (roverName) => {
  const resp = await axios.get(
    createRoverInfoUrl(roverName), 
    {
      params: {
        'api_key': config.key, 
      }
    }
  );
  return await resp.data.rover;
};


export const createPhoroManifestUrl = (roverName) => {
  if (!config.rovers.includes(roverName.toLowerCase())) {
    console.error(`"${roverName}" - there is no such rover.`);
    return false;
  };
  return `${config.baseUrl}/manifests/${roverName}`; 
}; 

export const getPhotoManifestInfo = async (roverName) => {
  const resp = await axios.get(createPhoroManifestUrl(roverName), {
    params: {
      'api_key': config.key,
    }
  }); 
  return resp.data.photo_manifest;  
};

