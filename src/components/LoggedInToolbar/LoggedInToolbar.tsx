import { ILoggedInToolbarProps } from "../../models";
import MyButton from "../UI/button/MyButton";
import classes from "./LoggedInToolbar.module.css";

const LoggedInToolbar = ({
  userName,
  userAvatar,
  logoutHandler,
}: ILoggedInToolbarProps) => {

  return (
    <div className={classes.loggedInToolbar}>
      <p>Hello, <strong>{userName}</strong></p>
      <img src={userAvatar} className={classes.avatarImg} alt="userAvatar" />
      <MyButton
        type="button"
        className={classes.logoutBtn}
        handler={logoutHandler}
      >
        Logout
      </MyButton>
    </div>
  );
};

export default LoggedInToolbar;
