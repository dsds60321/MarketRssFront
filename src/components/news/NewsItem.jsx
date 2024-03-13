import classes from "./News.module.css";

export default function NewsItem() {
  return (
    <>
      <div>
        <a href="#" className={classes.newsItem}>
          <img src="news_image.jpg" alt="뉴스 이미지" className={classes.newsImg}/>
          <div className={classes.newsContent}>
            <h3 className={classes.newsTitle}>뉴스 타이틀</h3>
            <p className={classes.newsSummary}>여기에 뉴스 요약이 들어갑니다. 더 많은 정보를 위해 클릭하세요...</p>
            <div className={classes.newsDate}>작성일: 2023-04-01</div>
          </div>
        </a>
      </div>
    </>
  )
}