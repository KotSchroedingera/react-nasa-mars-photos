import React, { useState } from 'react'
import { getPhotoManifestInfo } from '../api/api.methods';

export const PhotoInfo = () => {
  const [photoInfo, setPhotoInfo] = useState(null);
  const [error, setError] = useState(null);

  useState(() => {
    getPhotoManifestInfo('spirit')
      .then(data => setPhotoInfo(data))
      .catch(err => setError(err));
  }, [])

  return (
    <div>
      { error && error.message }
      { photoInfo && photoInfo.name }
    </div>
  )
}
