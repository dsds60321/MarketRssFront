import axios from '@/apis/axios.js';

export const getNews = async () => {
  try {
    return await axios('/news');
  } catch (e) {
    console.log(e);
  }
};
