import axios from '@/apis/axios.js';

export const fetchUserDetails = async () => {
  try {
    return await axios.get('/edit');
  } catch (e) {
    console.error(e);
  }
};

export const fetchStockRegist = async (stockReq) => {
  try {
    return await axios.post('/edit/stock', stockReq);
  } catch (e) {
    console.error(e);
  }
};
