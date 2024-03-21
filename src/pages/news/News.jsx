import classes from './News.module.css';
import Pagination from '../../components/pagination/Pagination.jsx';
import NewsItem from '../../components/news/NewsItem.jsx';
import { getNews } from '@/apis/news.js';

const newsList = [
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
  getNews();
  return (
    <>
      <div className="content">
        <div className={classes.contentWrapper}>
          <div className={classes.newsList}>
            {newsList.map((news, index) => (
              <NewsItem news={news} key={`${news.title}_${index}`} />
            ))}
          </div>
          <Pagination />
        </div>
      </div>
    </>
  );
}