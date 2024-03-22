import classes from './News.module.css';
import Pagination from '../../components/pagination/Pagination.jsx';
import NewsItem from '../../components/news/NewsItem.jsx';
import { getNews } from '@/apis/news.js';
import { useEffect, useState } from 'react';

const newsList2 = [
  {
    title: 'News Title',
    description: 'description',
    regDate: '2023-04-12',
    img_uri: '',
    link: '',
  },
  {
    title: 'News Title2',
    description: 'description2',
    date: '2023-04-13',
    img_uri: '',
    link: '',
  },
];
export default function News() {
  const [newsList, setNewsList] = useState(null);
  useEffect(() => {
    const fetchGetNewsList = async () => {
      const { status, data } = await getNews();

      if (status === 200) {
        setNewsList(data.news.data);
      }
    };

    fetchGetNewsList();
  }, []);
  return (
    <>
      <div className="content">
        <div className={classes.contentWrapper}>
          <div className={classes.newsList}>
            {newsList?.map((news) => (
              <NewsItem news={news} key={news.uuid} />
            ))}
          </div>

          <Pagination />
        </div>
      </div>
    </>
  );
}
