import axios from 'axios';

const API_KEY = '41545079-e9b3a4168a776ff0916b92321';
const BASE_URL = `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

const fetchImages = async () => {
  const response = await axios({
    url: BASE_URL,
    method: 'get',
  });

  return response.data;
};

export default fetchImages;
