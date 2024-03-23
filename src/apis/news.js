import axios from '@/apis/axios.js';

export const fetchGetNews = async (page, size) => {
  try {
    return await axios.get('/news', {
      params: {
        page,
        size,
      },
    });
  } catch (e) {
    console.log(e);
    return e.response;
  }
};
