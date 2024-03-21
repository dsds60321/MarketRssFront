import axios from 'axios';

/**
 * 중복 아이디 검사
 * @param id
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const fetchDuplicateIdReq = async (id) => {
  try {
    return await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/id-check`, { id });
  } catch (e) {
    console.error('fetchDuplicateIdReq : ', e);
    return e;
  }
};

/**
 * 인증번호 코드 발송
 * @param certificationReq
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const fetchVerificationReq = async (certificationReq) => {
  try {
    return await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/email-certification`,
      certificationReq
    );
  } catch (e) {
    console.error('fetchVerificationReq : ', e);
    return e;
  }
};

/**
 * 회원가입
 * @param signUpReq
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const fetchSignUpReq = async (signUpReq) => {
  try {
    return await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/sign-up`, signUpReq, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (e) {
    console.error('fetchSignUpReq : ', e);
    return e;
  }
};
