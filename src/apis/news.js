import axios from '@/apis/axios.js';

export const getNews = async () => {
  const data = await axios('/news');
  console.log(data);
};
