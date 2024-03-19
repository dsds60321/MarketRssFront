import classes from './Login.module.css'
export default function Login() {
  return (
    <>
      <div className={classes.loginContainer}>
        <div className={classes.loginCard}>
          <h2>로그인</h2>
          <form>
            <input type="text" name="username" placeholder="아이디" required/>
            <input type="password" name="password" placeholder="비밀번호" required/>
            <div>
              <input type="checkbox" id="remember-me"/>
              <label htmlFor="remember-me">아이디 저장</label>
            </div>
            <input type="submit" value="로그인"/>
            <div className={classes.loginHelp}>
              <a href="#">회원가입</a> | <a href="#">아이디 찾기</a> | <a href="#">비밀번호 찾기</a>
            </div>
          </form>
          <button className={classes.kakaoLogin}>카카오로 시작하기</button>
        </div>
      </div>
    </>
  )
}