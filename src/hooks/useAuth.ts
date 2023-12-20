import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ISubmittedUserInfo } from "../models";
import axios from "axios";
import { BASE_URL } from "../globals";

const useAuth = () => {
  const [authData, setAuthData] = useState({ login: "", password: "" });
  const [token, setToken] = useState({ token: "" });
  const [userData, setUserData] = useState({
    id: "",
    login: "",
    name: "",
    avatar: "",
  });
  const [readyForAuth, setReadyForAuth] = useState(false);
  const [readyForFetchUserData, setReadyForFetchUserData] = useState(false);
  const [tokenInStorage, setTokenInStorage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ message: "" });

  const navigate = useNavigate();

  const handleSubmit = (data: ISubmittedUserInfo) => {
    const authData = { login: data.userLogin, password: data.userPassword };
    setAuthData(authData);
    setReadyForAuth(true);
  };
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const getAuth = async () => {
      try {
        setIsLoading(true);
        setError({ message: "" });

        const response = await axios({
          method: "post",
          url: "/auth",
          baseURL: BASE_URL,
          data: authData,
        });

        setToken(response.data);
        setReadyForFetchUserData(true);
        setReadyForAuth(false);

        localStorage.setItem("token", JSON.stringify(response.data));
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error.response?.data.message);
          setError({ message: error.response?.data.message });
        } else {
          console.error(error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    const getUserData = async () => {
      try {
        setIsLoading(true);
        setError({ message: "" });

        const response = await axios({
          method: "get",
          url: "/private/me",
          baseURL: BASE_URL,
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        });
        setUserData(response.data);
        setReadyForFetchUserData(false);

        navigate("/news");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError({ message: error.response?.data.message });
        } else {
          console.error(error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (readyForAuth) {
      getAuth();
    }

    if (readyForFetchUserData) {
      getUserData();
    }

    if (localStorage.getItem("token") != null && !tokenInStorage) {
      const token = JSON.parse(localStorage.getItem("token") as string);

      setToken(token);
      setTokenInStorage(true);
      setReadyForFetchUserData(true);
    }
  }, [
    readyForAuth,
    authData,
    token,
    readyForFetchUserData,
    tokenInStorage,
    navigate,
  ]);

  return [{ handleSubmit, handleLogout, isLoading, error, userData, token }];
};

export default useAuth;
