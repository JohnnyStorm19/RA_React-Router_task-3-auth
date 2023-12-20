import { useContext } from "react";
import FormHeader from "../../components/FormHeader/FormHeader";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import MainLogo from "../../components/MainLogo/MainLogo";
import { AppContext } from "../../services/Context/AppContext";
import classes from "./FirstPage.module.css";
import { IContext } from "../../models";
import MyLoader from "../../components/Loader/MyLoader";
import MyError from "../../components/Error/MyError";

const FirstPage = () => {
  const context = useContext(AppContext as React.Context<IContext>);
  const { handleSubmit, error, isLoading } = context;
  return (
    <div className={classes.mainPage}>
      {isLoading && <MyLoader />}
      <Header>
        <MainLogo>Testing App</MainLogo>
        <FormHeader handleSubmit={handleSubmit} />
        {error.message.length > 0 && <MyError message={error.message} />}
      </Header>
      <Main>First greeting page!</Main>
    </div>
  );
};

export default FirstPage;
