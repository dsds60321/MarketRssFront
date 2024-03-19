import classes from './Edit.module.css';
export default function Edit() {
  return (
    <>
      <div className="content">
        <div className={classes.editContainer}>
          <div className={classes.card}>
            <h2>정보 수정</h2>
            <div className={classes.formGroup}>
              <label htmlFor="nickname">닉네임</label>
              <input type="text" id="nickname" placeholder="닉네임 입력" />
            </div>
            <div className={classes.formGroup}>
              <label htmlFor="password">패스워드</label>
              <input type="password" id="password" placeholder="패스워드 입력" />
            </div>
            <div className={classes.formGroup}>
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" placeholder="이메일 입력" />
            </div>
            <div className={classes.formGroup}>
              <button>수정</button>
            </div>
          </div>

          <div className={classes.card}>
            <h2>피드 선택</h2>
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
              <label htmlFor="fund">ETF 선택</label>
              <select id="fund">
                <option>글로벌 주식혼합형</option>
                <option>국내 채권혼합형</option>
                <option>해외 채권혼합형</option>
                <option>리얼 에스테이트 펀드</option>
                <option>상품 펀드</option>
              </select>
            </div>
            <div className={classes.selections} id="selections">
              <div className={classes.tag}>삼성전자</div>
              <div className={classes.tag}>글로벌 주식혼합형</div>
            </div>
            <div className={classes.formGroup}>
              <button>등록</button>
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.listBox}>
            <h2>리스트 아이템</h2>
            <div className={classes.item}>
              <span className={classes.category}>주식</span>
              <span className={classes.name}>삼성전자</span>
              <span className={classes.date}>2023-04-30</span>
            </div>
            <div className={classes.item}>
              <span className={classes.category}>ETF</span>
              <span className={classes.name}>FNGU</span>
              <span className={classes.date}>2023-04-30</span>
            </div>
            <div className={classes.item}>
              <span className={classes.category}>주식</span>
              <span className={classes.name}>삼성전자</span>
              <span className={classes.date}>2023-04-30</span>
            </div>
            <div className={classes.item}>
              <span className={classes.category}>주식</span>
              <span className={classes.name}>삼성전자</span>
              <span className={classes.date}>2023-04-30</span>
            </div>
            <div className={classes.item}>
              <span className={classes.category}>주식</span>
              <span className={classes.name}>삼성전자</span>
              <span className={classes.date}>2023-04-30</span>
            </div>
            <div className={classes.item}>
              <span className={classes.category}>주식</span>
              <span className={classes.name}>삼성전자</span>
              <span className={classes.date}>2023-04-30</span>
            </div>
            <div className={classes.item}>
              <span className={classes.category}>주식</span>
              <span className={classes.name}>삼성전자</span>
              <span className={classes.date}>2023-04-30</span>
            </div>
          </div>
          <div className={classes.scrollIndicator}>스크롤해서 더 보기</div>
        </div>
      </div>
    </>
  );
}
