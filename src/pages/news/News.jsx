import classes from './News.module.css';
import Pagination from '../../components/pagination/Pagination.jsx';
import NewsItem from '../../components/news/NewsItem.jsx';
import { fetchGetNews } from '@/apis/news.js';
import { useEffect, useState } from 'react';

export default function News() {
  const [newsList, setNewsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(10); // 페이지 당 뉴스 수
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchGetNewsList = async () => {
      const { status, data } = await fetchGetNews(currentPage, newsPerPage);
      if (status === 200) {
        setNewsList(data.news);
        setTotal(data.total);
      }
    };

    fetchGetNewsList();
  }, [currentPage, newsPerPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="content">
        <div className={classes.contentWrapper}>
          <div className={classes.newsList}>
            {newsList && newsList.length > 0 ? (
              newsList?.map((news, index) => <NewsItem news={news} key={`${index}_${news.uuid}`} />)
            ) : (
              <div className={classes.noData}>
                피드 받으신 뉴스가 없습니다. 최근 7일 까지 등록한 피드가 기록되고 있습니다.
              </div>
            )}
          </div>
          <Pagination
            currentPage={currentPage}
            newsPerPage={newsPerPage}
            totalNews={total}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
}
