import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  console.log(defaultSearchTerm);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  },[defaultSearchTerm])

  const search = (term) => {
    youtube.get('/search', {
      params: {
        q: term
      }
    }).then(data => {
      setVideos(data.data.items);
    }).catch(error => {
      console.log('error', error);
    })
  }

  return [videos, search];

};

export default useVideos;