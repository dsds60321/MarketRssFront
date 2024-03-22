import axios from '@/apis/axios.js';

export const getNews = async () => {
  try {
    return await axios.get('/news');
  } catch (e) {
    console.log(e);
  }
};
