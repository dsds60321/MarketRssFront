import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from '@/contexts/AuthContext.jsx';

export default function Oauth() {
  const { setTokens } = useContext(AuthContext);
  const navigate = useNavigate();

  const { accessToken, refreshToken } = useParams();

  console.log(accessToken, refreshToken);

  useEffect(() => {
    if (!accessToken || !refreshToken) {
      return;
    }

    setTokens({ accessToken, refreshToken });
    navigate('/');
  }, [accessToken]);

  return <></>;
}
