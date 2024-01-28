import axios from 'axios';

const API_KEY = '41545079-e9b3a4168a776ff0916b92321';

const fetchImages = async query => {
  const response = await axios({
    url: `https://pixabay.com/api/?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    method: 'get',
  });

  return response.data;
};

export default fetchImages;
