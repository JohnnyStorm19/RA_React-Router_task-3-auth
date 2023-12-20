import { useContext } from "react";
import CardsList from "../../components/CardList/CardsList";
import LoggedInToolbar from "../../components/LoggedInToolbar/LoggedInToolbar";
import { AppContext } from "../../services/Context/AppContext";
import { IContext } from "../../models";
import classes from './LoggedInPage.module.css'
import MyLoader from "../../components/Loader/MyLoader";
import MyError from "../../components/Error/MyError";

const LoggedInPage = () => {
  const context = useContext(AppContext as React.Context<IContext>);
  const { newsData, newsLoading, newsError, userData, handleLogout } = context;
  return (
    <div className={classes.loggedInPage}>
      <LoggedInToolbar
        userName={userData.name}
        userAvatar={userData.avatar}
        logoutHandler={handleLogout}
      />
      <CardsList cards={newsData} />
      {newsLoading && <MyLoader />}
      {newsError.message.length > 0 && <MyError message={newsError.message}/>}
    </div>
  );
};

export default LoggedInPage;
