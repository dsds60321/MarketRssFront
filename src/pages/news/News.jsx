import classes from './News.module.css';
import Pagination from '../../components/pagination/Pagination.jsx';
import NewsItem from '../../components/news/NewsItem.jsx';
import { fetchGetNews } from '@/apis/news.js';
import { useEffect, useState } from 'react';

export default function News() {
  const [newsList, setNewsList] = useState(null);
  useEffect(() => {
    const fetchGetNewsList = async () => {
      const { status, data } = await fetchGetNews();

      if (status === 200) {
        // setNewsList(data.news.data);
        setNewsList(null);
      }
    };

    fetchGetNewsList();
  }, []);
  return (
    <>
      <div className="content">
        <div className={classes.contentWrapper}>
          <div className={classes.newsList}>
            {newsList && newsList.length > 0 ? (
              newsList?.map((news) => <NewsItem news={news} key={news.uuid} />)
            ) : (
              <div className={classes.noData}>
                피드 받으신 뉴스가 없습니다. 최근 7일 까지 등록한 피드가 기록되고 있습니다.
              </div>
            )}
          </div>
          <Pagination />
        </div>
      </div>
    </>
  );
}
