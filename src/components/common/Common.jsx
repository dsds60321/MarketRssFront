import classes from './Common.module.css';
export function ErrorMessage({ message }) {
  return (
    <>
      <small className={classes.errorMessage} role="alert">
        {message}
      </small>
    </>
  );
}
