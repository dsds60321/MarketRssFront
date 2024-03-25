import classes from './NewsItem.module.css';

export default function NewsItem({ news }) {
  return (
    <>
      <div>
        <a target="_blank" href={news.url} className={classes.newsItem}>
          <img
            src={`${import.meta.env.VITE_API_BASE_URL}${news.custom_image_url}`}
            alt="뉴스 이미지"
            className={classes.newsImg}
          />
          <div className={classes.newsContent}>
            <h3 className={classes.newsTitle}>{news.title}</h3>
            <p className={classes.newsSummary}>{news.snippet}</p>
            <div className={classes.newsDate}>작성일: {news.published_at.substring(0, 10)}</div>
          </div>
        </a>
      </div>
    </>
  );
}
