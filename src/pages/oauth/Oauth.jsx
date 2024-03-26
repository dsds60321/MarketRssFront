import { useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from '@/contexts/AuthContext.jsx';

export default function Oauth() {
  const { setTokens } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const accessToken = queryParams.get('accessToken');
  const refreshToken = queryParams.get('refreshToken');

  useEffect(() => {
    if (!accessToken || !refreshToken) {
      return;
    }

    setTokens({ accessToken, refreshToken });
    navigate('/');
  }, [accessToken]);

  return <></>;
}
