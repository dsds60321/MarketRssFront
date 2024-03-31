import axios from 'axios';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem('refreshToken');

      const response = await axios.post(
        '/api/v1/auth/refresh-token',
        { refreshToken },
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );

      if (response.status === 200) {
        localStorage.setItem('accessToken', response.data.accessToken);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
        axios(originalRequest);
        location.reload();
      }
    }

    const { response } = error;

    if (response.status === 401 && response.data.code === 'TE') {
      location.href = '/sign-in';
    }

    return Promise.reject(error);
  }
);

export default instance;
