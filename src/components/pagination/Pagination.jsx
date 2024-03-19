import classes from './Pagination.module.css';

export default function Pagination() {
  return (
    <>
      <div className={classes.paginationContainer}>
        <div className={classes.pagination}>
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a className="active" href="#">
            2
          </a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">&raquo;</a>
        </div>
      </div>
    </>
  );
}
