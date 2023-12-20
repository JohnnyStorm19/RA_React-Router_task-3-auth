import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { IContext } from "../../models";
import { AppContext } from "../../services/Context/AppContext";
import { useFetchNewsCardData } from "../../hooks/useFetchNewsCardData";
import classes from "./NewsCardPage.module.css";
import MyLoader from "../../components/Loader/MyLoader";
import MyError from "../../components/Error/MyError";

const NewsCardPage = () => {
  const context = useContext(AppContext as React.Context<IContext>);
  const { token } = context;
  const { id } = useParams();
  const [{ newsCardData, newsLoading, newsError }] = useFetchNewsCardData(
    token,
    id as string
  );

  return (
    <div className={classes.newsCard_container}>
      {newsLoading && <MyLoader />}
      {newsError.message.length > 0 && <MyError message={newsError.message} />}
      <Link to={"/news"} className={classes.link__back}></Link>
      <div className={classes.img_container}>
        <img
          src={newsCardData?.image}
          className={classes.newsCard_img}
          alt=""
        />
      </div>
      <h2 className={classes.newsCard_title}>{newsCardData?.title}</h2>
      <p className={classes.newsCard_content}>{newsCardData?.content}</p>
    </div>
  );
};

export default NewsCardPage;
