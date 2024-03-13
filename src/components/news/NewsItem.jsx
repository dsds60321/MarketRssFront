import classes from "./News.module.css";

export default function NewsItem({news}) {
  return (
    <>
      <div>
        <a href={news.link} className={classes.newsItem}>
          <img src={news.img_uri} alt="뉴스 이미지" className={classes.newsImg}/>
          <div className={classes.newsContent}>
            <h3 className={classes.newsTitle}>{(news.title)}</h3>
            <p className={classes.newsSummary}>{(news.description)}</p>
            <div className={classes.newsDate}>작성일: {(news.regDate)}</div>
          </div>
        </a>
      </div>
    </>
  )
}