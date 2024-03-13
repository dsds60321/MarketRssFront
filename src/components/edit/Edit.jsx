import classes from './Edit.module.css';
export default function Edit() {
  return(
    <>
      <div className={classes.editContainer}>
        <div className={classes.card}>
          <h2>정보 수정</h2>
          <div className={classes.formGroup}>
            <label htmlFor="nickname">닉네임</label>
            <input type="text" id="nickname" placeholder="닉네임 입력"/>
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="password">패스워드</label>
            <input type="password" id="password" placeholder="패스워드 입력"/>
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" placeholder="이메일 입력"/>
          </div>
          <div className={classes.formGroup}>
            <button>수정하기</button>
          </div>
        </div>

        <div className={classes.card}>
          <h2>선택 옵션</h2>
          <div className={classes.formGroup}>
            <label htmlFor="stock">주식 선택</label>
            <select id="stock">
              <option>삼성전자</option>
              <option>SK하이닉스</option>
              <option>현대차</option>
              <option>LG화학</option>
              <option>네이버</option>
            </select>
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="fund">펀드 선택</label>
            <select id="fund">
              <option>글로벌 주식혼합형</option>
              <option>국내 채권혼합형</option>
              <option>해외 채권혼합형</option>
              <option>리얼 에스테이트 펀드</option>
              <option>상품 펀드</option>
            </select>
          </div>
          <div className={classes.selections} id="selections">
            <div className={classes.tag}>
              삼성전자
            </div>
            <div className={classes.tag}>
              글로벌 주식혼합형
            </div>
          </div>
        </div>
      </div>
    </>
  )
}