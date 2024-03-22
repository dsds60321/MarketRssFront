import classes from './NewsItem.module.css';

export default function NewsItem({ news }) {
  return (
    <>
      <div>
        <a target="_blank" href={news.url} className={classes.newsItem}>
          <img src={news.image_url} alt="뉴스 이미지" className={classes.newsImg} />
          <div className={classes.newsContent}>
            <h3 className={classes.newsTitle}>{news.title}</h3>
            <p className={classes.newsSummary}>{news.snippet}</p>
            <div className={classes.newsDate}>작성일: {news.published_at}</div>
          </div>
        </a>
      </div>
    </>
  );
}
