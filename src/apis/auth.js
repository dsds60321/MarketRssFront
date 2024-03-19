import axios from 'axios';

export const signUpReq = async (signUpReq) => {
  return await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/sign-up`, signUpReq);
};

export const duplicateIdReq = async (id) => {
  return await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/id-check`, { id });
};
