import classes from './SignUp.module.css';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@components/common/Common.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Toast, { toastNotification } from '@components/common/ToastNotify.jsx';
import { duplicateIdReq } from '@/apis/auth.js';

export default function SignUp() {
  const [isSendAuth, setIsSendAuth] = useState(false);
  const navigate = useNavigate();

  console.log(isSendAuth);
  const handleIsSendAuth = () => {
    setIsSendAuth(!isSendAuth);
  };
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
    getValues,
  } = useForm();

  const onSubmit = async (form) => {
    const signUpReq = JSON.stringify(form);
    const { status } = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/sign-up`,
      signUpReq
    );

    if (status === 200) {
      navigate('/sign-in');
    }
  };

  const fetchDuplicateId = async () => {
    const { id } = getValues();

    const { id: idError } = errors;

    if (!id) {
      return;
    }

    if (idError) {
      return;
    }

    const { status } = await duplicateIdReq(id);

    if (status === 200) {
      toastNotification({ type: 'success', text: '중복된 아이디가 없습니다.' });
    }
  };

  const sendVerificationCode = async () => {
    const certificationReq = getValues();

    const { id, password, email } = certificationReq;

    if (!id || !password || !email) {
      return;
    }

    handleIsSendAuth();
    const { status } = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/email-certification`,
      certificationReq
    );

    if (status === 200) {
      handleIsSendAuth();
      alert('이메일 확인해주세요');
    }
  };

  return (
    <div className={classes.signupForm}>
      <Toast />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>회원 가입</h2>
        <div className={classes.verificationForm}>
          <input
            type="text"
            name="id"
            placeholder="아이디"
            aria-invalid={isSubmitted ? (errors.id ? 'true' : 'false') : undefined}
            {...register('id', {
              required: '아이디 입력은 필수값 입니다.',
              pattern: {
                value: /^[A-Za-z\d]{6,20}$/,
                message: '영문과 숫자로 이루어진 6자에서 20자 사이 문자열이어야 합니다.',
              },
            })}
          />
          <button
            className={classes.verificationButton}
            type={'submit'}
            onClick={fetchDuplicateId}
            disabled={isSubmitting}
          >
            중복 확인
          </button>
        </div>
        {errors.id && <ErrorMessage message={errors.id.message} />}
        <br />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          aria-invalid={isSubmitted ? (errors.password ? 'true' : 'false') : undefined}
          {...register('password', {
            required: '비밀번호 입력은 필수값 입니다.',
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/,
              message: '비밀번호는 8자에서 15자 사이의 영문과 숫자 특수문자를 포함해야 합니다.',
            },
          })}
        />
        {errors.password && <ErrorMessage message={errors.password.message} />}
        <br />
        <input
          type="email"
          name="email"
          placeholder="example@site.com"
          aria-invalid={isSubmitted ? (errors.email ? 'true' : 'false') : undefined}
          {...register('email', {
            required: '이메일 입력은 필수값 입니다.',
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: '정확한 이메일을 입력해주세요.',
            },
          })}
        />
        {errors.email && <ErrorMessage message={errors.email.message} />}
        <br />
        <div className={classes.verificationForm}>
          <input
            className={classes.verificationInput}
            type="text"
            name="certificationNumber"
            placeholder="인증번호"
            aria-invalid={isSubmitted ? (errors.certificationNumber ? 'true' : 'false') : undefined}
            {...register('certificationNumber', {
              required: '인증번호는 필수값 입니다.',
            })}
          />
          <button
            className={classes.verificationButton}
            type={'submit'}
            onClick={sendVerificationCode}
            disabled={isSubmitting}
          >
            인증번호 발송
          </button>
        </div>
        {errors.certificationNumber && (
          <ErrorMessage message={errors.certificationNumber.message} />
        )}
        <button
          className={isSendAuth ? undefined : classes.disabled}
          type={isSendAuth ? 'submit' : 'button'}
          disabled={isSubmitting}
        >
          로그인
        </button>
      </form>
    </div>
  );
}
