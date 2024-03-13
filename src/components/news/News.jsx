import classes from './News.module.css';
import Pagination from "../pagination/Pagination.jsx";
import NewsItem from "./NewsItem.jsx";
export default function News () {
  return (
    <>
      <div className="content">
      <div className={classes.contentWrapper}>
        <div className={classes.newsList}>
          <NewsItem/>
          <NewsItem/>
          <NewsItem/>
          <NewsItem/>
          <NewsItem/>
        </div>
        <Pagination/>
      </div>
      </div>
    </>
  )
}