import classes from "./MyForm.module.css";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import { useState } from "react";
import { ISubmittedUserInfo } from "../../models";
// import { IHandleSubmit } from "../../models";

const FormHeader = ({ handleSubmit }: {
  handleSubmit: (data: ISubmittedUserInfo) => void;
}) => {
  const [formData, setFormData] = useState({
    userLogin: "",
    userPassword: "",
  });

  const onFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleSubmit(formData);

    setFormData({
      ...formData,
      userLogin: "",
      userPassword: "",
    });
  };

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <form className={classes.myForm} onSubmit={onFormSubmit}>
      <MyInput
        type="text"
        placeholder="Username"
        name="userLogin"
        onChange={onInputChange}
        value={formData.userLogin}
        required
      />
      <MyInput
        type="password"
        placeholder="Password"
        autoComplete="on"
        name="userPassword"
        onChange={onInputChange}
        value={formData.userPassword}
        required
      />
      <MyButton type="submit" className="loginBtn">
        Login
      </MyButton>
    </form>
  );
};

export default FormHeader;
