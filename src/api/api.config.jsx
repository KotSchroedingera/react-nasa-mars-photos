const config = {
  key: 'zM1HFtwx0LO9wgnQG0Q5HtlOj8VEidzuo2qTAcyQ', 
  baseUrl: 'https://api.nasa.gov/mars-photos/api/v1', 
  rovers: [
    'curiosity', 
    'opportunity', 
    'spirit'
  ], 
  cameras: [
    {
      name: 'fhaz', 
      full_name: 'Front Hazard Avoidance Camera',
      rovers: ['curiosity', 'opportunity', 'spirit']
    },
    {
      name: 'rhaz', 
      full_name: 'Rear Hazard Avoidance Camera',
      rovers: ['curiosity', 'opportunity', 'spirit']
    }, 
    {
      name: 'mast', 
      full_name: 'Mast camera', 
      rovers: ['curiosity']
    }, 
    {
      name: 'chemcam', 
      full_name: 'Chemistry and Camera Complex', 
      rovers: ['curiosity'] 
    },
    {
      name: 'mahli', 
      full_name: 'Mars Hand Lens Imager', 
      rovers: ['curiosity']
    }, 
    {
      name: 'mardi', 
      full_name: 'Mars Descent Imager', 
      rovers: ['curiosity']
    }, 
    {
      name: 'navcam', 
      full_name: 'Navigation Camera', 
      rovers: ['curiosity', 'opportunity', 'spirit']
    },
    {
      name: 'pancam', 
      full_name: 'Panoramic Camera', 
      rovers: ['opportunity', 'spirit'] 
    }, 
    {
      name: 'minites', 
      full_name: 'Miniature Thermal Emission Spectrometer (Mini-TES)', 
      rovers: ['opportunity', 'spirit'] 
    }
  ]
}; 

export default config;