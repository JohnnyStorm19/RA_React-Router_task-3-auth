import classes from "./MyError.module.css";

const MyError = ({ message }: { message: string }) => {
  return <div className={classes.myError}>{message}</div>;
};

export default MyError;
