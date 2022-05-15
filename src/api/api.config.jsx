const config = {
  key: 'zM1HFtwx0LO9wgnQG0Q5HtlOj8VEidzuo2qTAcyQ', 
  baseUrl: 'https://api.nasa.gov/mars-photos/api/v1', 
  rovers: [
    'curiosity', 
    'opportunity', 
    'spirit'
  ], 
  cameras: {
    fhaz: {
      abbr: 'fhaz', 
      name: 'Front Hazard Avoidance Camera',
      rovers: ['curiosity', 'opportunity', 'spirit']
    },
    rhaz: {
      abbr: 'rhaz', 
      name: 'Rear Hazard Avoidance Camera',
      rovers: ['curiosity', 'opportunity', 'spirit']
    }, 
    mast: {
      abbr: 'mast', 
      name: 'Mast camera', 
      rovers: ['curiosity']
    }, 
    chemcam: {
      abbr: 'chemcam', 
      name: 'Chemistry and Camera Complex', 
      rovers: ['curiosity'] 
    },
    mahli: {
      abbr: 'mahli', 
      name: 'Mars Hand Lens Imager', 
      rovers: ['curiosity']
    }, 
    mardi: {
      abbr: 'mardi', 
      name: 'Mars Descent Imager', 
      rovers: ['curiosity']
    }, 
    navcam: {
      abbr: 'navcam', 
      name: 'Navigation Camera', 
      rovers: ['curiosity', 'opportunity', 'spirit']
    },
    pancam: {
      abbr: 'pancam', 
      name: 'Panoramic Camera', 
      rovers: ['opportunity', 'spirit'] 
    }, 
    minites: {
      abbr: 'minites', 
      name: 'Miniature Thermal Emission Spectrometer (Mini-TES)', 
      rovers: ['opportunity', 'spirit'] 
    }
  }
}; 

export default config;