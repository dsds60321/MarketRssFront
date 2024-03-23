import classes from './Pagination.module.css';

export default function Pagination({ currentPage, newsPerPage, totalNews, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav>
        <ul className={classes.pagination}>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={
                number === currentPage
                  ? `${classes.pageItem} ${classes.active}`
                  : `${classes.pageItem}`
              }
            >
              <div
                onClick={() => (number === currentPage ? event.preventDefault() : paginate(number))}
                className={classes.pageLink}
              >
                {number}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
