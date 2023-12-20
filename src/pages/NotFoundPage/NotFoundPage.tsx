import { useNavigate } from "react-router-dom"
import classes from './NotFoundPage.module.css';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  }
  return (
    <div className={classes.notFoundPage__container}>
      <h1 className={classes.notFoundPage__title}>
        404
      </h1>
      <p className={classes.notFoundPage__text}>The page you were looking for could not be found</p>
      <button className={classes.notFoundPage__btn} onClick={handleClick}>Go back</button>
    </div>
  )
}

export default NotFoundPage
