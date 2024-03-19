import classes from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from '@/apis/axios.js';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext.jsx';
import { ErrorMessage } from '@components/common/Common.jsx';

export default function Login() {
  const { setTokens } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm();

  const onSubmit = async (form) => {
    const user = JSON.stringify(form);
    const { status, data } = await axios.post('/api/v1/auth/sign-in', user);

    if (status === 200) {
      setTokens(data);
      navigate('/');
    }
  };

  return (
    <>
      <div className={classes.loginContainer}>
        <div className={classes.loginCard}>
          <h2>로그인</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name="id"
              placeholder="아이디"
              aria-invalid={isSubmitted ? (errors.id ? 'true' : 'false') : undefined}
              {...register('id', {
                required: '아이디 입력은 필수 입니다.',
              })}
            />
            {errors.id && <ErrorMessage message={errors.id.message} />}
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              aria-invalid={isSubmitted ? (errors.password ? 'true' : 'false') : undefined}
              {...register('password', {
                required: '비밀번호 입력은 필수입니다.',
              })}
            />
            {errors.password && <ErrorMessage message={errors.password.message} />}
            <div>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">아이디 저장</label>
            </div>
            <div className={classes.loginHelp}>
              <Link to={'/sign-up'}>회원가입</Link> | <a href="#">아이디 찾기</a> |{' '}
              <a href="#">비밀번호 찾기</a>
            </div>
            <input type="submit" disabled={isSubmitting} value="로그인" />
          </form>
          <button className={classes.kakaoLogin}>카카오로 시작하기</button>
        </div>
      </div>
    </>
  );
}
