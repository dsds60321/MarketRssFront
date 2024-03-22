import axios from '@/apis/axios.js';

export const fetchGetNews = async () => {
  try {
    return await axios.get('/news');
  } catch (e) {
    console.log(e);
  }
};
