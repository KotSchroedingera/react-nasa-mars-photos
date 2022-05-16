import axios from 'axios';
import config from './api.config';


const checkRoverName = (name) => {
  if (!config.rovers.includes(name.toLowerCase())) {
    console.error(`"${name}" - there is no such rover.`);
    return false;
  }
  return true;
};


export const createRoverInfoUrl = (roverName) => {
  if (checkRoverName(roverName)) {  
    return `${config.baseUrl}/rovers/${roverName}`;
  }
}; 

export const getRoverInfo = async (roverName) => {
  const resp = await axios.get(
    createRoverInfoUrl(roverName), {
      params: { 'api_key': config.key } 
    });
  return await resp.data.rover;
};


export const createPhoroManifestUrl = (roverName) => {
  if (checkRoverName(roverName)) {
    return `${config.baseUrl}/manifests/${roverName}`; 
  }
}; 

export const getPhotoManifestInfo = async (roverName) => {
  const resp = await axios.get(createPhoroManifestUrl(roverName), {
    params: { 'api_key': config.key }
  }); 
  return resp.data.photo_manifest;  
};




