import classes from './Edit.module.css';
import { fetchStockRegist, fetchUserDetails } from '@/apis/edit.js';
import { useEffect, useRef, useState } from 'react';
import { toastNotification } from '@components/common/ToastNotify.jsx';
import { TOAST_MESSAGE, TOAST_TYPE } from '@/common/const/toast.js';
import { US_STOCK } from '@/assets/usStock.js';
import { ToastContainer } from 'react-toastify';
export default function Edit() {
  const [datas, setDatas] = useState({});
  const [toggles, setToggles] = useState([]);
  const [originToggles, setOriginToggles] = useState([]);
  const divRef = useRef(null);
  const [isOverflow, setIsOverflow] = useState(false);

  // init Method
  const checkDivHeight = () => {
    setTimeout(() => {
      if (divRef.current) {
        const isHeightOverflow = divRef.current.offsetHeight > 350; // 200px을 기준으로 설정
        setIsOverflow(isHeightOverflow);
      }
    }, 100);
  };

  useEffect(() => {
    const getUserDetails = async () => {
      const { status, data } = await fetchUserDetails();

      if (status === 200) {
        setDatas({ userPayload: data.userPayload, stockPayload: data.stockPayload });
        const stocks = data.stockPayload.stocks.filter((stock) => stock !== '');
        setOriginToggles(stocks);
        setToggles(stocks);
      } else {
        toastNotification({ type: TOAST_TYPE.ERROR, text: TOAST_MESSAGE.ERROR });
      }
    };

    getUserDetails();

    checkDivHeight();
    // 창 크기가 변경될 때마다 높이를 재확인합니다.
    window.addEventListener('resize', checkDivHeight);

    return () => {
      window.removeEventListener('resize', checkDivHeight);
    };
  }, []);

  const handleToggles = ({ target }) => {
    const selectValue = target.value;

    if (!selectValue) {
      return;
    }

    setToggles(toggles.includes(selectValue) ? [...toggles] : [...toggles, selectValue]);
  };

  const removeToggle = ({ target }) => {
    const selectValue = target.innerText;

    setToggles(toggles.filter((toggle) => toggle !== selectValue));
    toastNotification({ type: TOAST_TYPE.SUCCESS, text: TOAST_MESSAGE.STOCK_TOGGLE_REMOVE });
  };

  const registStock = async () => {
    if (originToggles === toggles) {
      toastNotification({ type: TOAST_TYPE.DEFAULT, text: TOAST_MESSAGE.NO_CHANGES_DETECTED });
      return;
    }
    const { status, data } = await fetchStockRegist({ stocks: toggles });
    if (status === 200) {
      toastNotification({ type: TOAST_TYPE.SUCCESS, text: TOAST_MESSAGE.SUCCESS });
      location.reload();
    } else if (status === 400) {
      toastNotification({ type: TOAST_TYPE.WARN, text: TOAST_MESSAGE.BAD_REQUEST });
    } else {
      toastNotification({ type: TOAST_TYPE.ERROR, text: TOAST_MESSAGE.ERROR });
    }
  };

  return (
    <>
      <div className="content">
        <ToastContainer />
        <div className={classes.editContainer}>
          <div className={classes.card}>
            <h2>정보 수정</h2>
            <div className={classes.formGroup}>
              <label htmlFor="id">아이디</label>
              <input type="text" id="id" value={datas.userPayload?.userId || ''} readOnly={true} />
            </div>
            <div className={classes.formGroup}>
              <label htmlFor="password">패스워드</label>
              <input type="password" id="password" placeholder="패스워드 입력" />
            </div>
            <div className={classes.formGroup}>
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                placeholder="이메일 입력"
                value={datas.userPayload?.email || ''}
                readOnly={true}
              />
            </div>
            <div className={classes.formGroup}>
              <button>수정</button>
            </div>
          </div>

          <div className={classes.card}>
            <h2>피드 선택</h2>
            <div className={classes.formGroup}>
              <label htmlFor="stock">주식 선택</label>
              <select id="stock" onChange={handleToggles}>
                <option value="">선택</option>
                {Object.keys(US_STOCK).map((key) => (
                  <option key={key} value={`${key}`}>
                    {US_STOCK[key]}
                  </option>
                ))}
              </select>
            </div>
            <div className={classes.selections}>
              {toggles.map((toggle) => (
                <div key={toggle} className={classes.tag} onClick={removeToggle}>
                  {toggle}
                </div>
              ))}
            </div>
            <div className={classes.formGroup}>
              <button onClick={registStock}>등록</button>
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.listBox} ref={divRef}>
            <h2>주식</h2>
            {datas.stockPayload?.stocks.map((stock) => (
              <div key={stock} className={classes.item}>
                <span className={classes.category}>주식</span>
                <span className={classes.name}>{stock}</span>
                <span className={classes.date}>2023-04-30</span>
              </div>
            ))}
          </div>
          {isOverflow && <div className={classes.scrollIndicator}>스크롤해서 더 보기</div>}
        </div>
      </div>
    </>
  );
}
