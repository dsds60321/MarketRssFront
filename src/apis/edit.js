import axios from '@/apis/axios.js';

export const fetchUserDetails = async () => {
  try {
    return await axios.get('/edit');
  } catch (e) {
    console.error(e);
    return e.response;
  }
};

export const fetchStockRegist = async (stockReq) => {
  try {
    return await axios.post('/edit/stock', stockReq);
  } catch (e) {
    console.error(e);
    return e.response;
  }
};

export const fetchUserDetail = async (userReq) => {
  try {
    return await axios.post('/edit', userReq);
  } catch (e) {
    console.log(e);
    return e.response;
  }
};

export const fetchKakaoFeed = async () => {
  try {
    return await axios.get('/edit/kakao');
  } catch (e) {
    console.log(e);
    return e.response;
  }
};
