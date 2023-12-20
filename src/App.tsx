import { Route, Routes } from "react-router-dom";
import FirstPage from "./pages/FirstPage/FirstPage";
import LoggedInPage from "./pages/LoggedInPage/LoggedInPage";
import useAuth from "./hooks/useAuth";
import { AppContext } from "./services/Context/AppContext";
import { useFetchNews } from "./hooks/useFetchNews";
import NewsCardPage from "./pages/NewsCardPage/NewsCardPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const App = () => {
  const [{ handleSubmit, handleLogout, isLoading, error, userData, token }] = useAuth();
  const [{ newsData, newsLoading, newsError }] = useFetchNews(token);

  return (
    <AppContext.Provider
      value={{ handleSubmit, newsData, userData, handleLogout, isLoading, error, newsLoading, newsError, token }}
    >
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/news" element={<LoggedInPage />} />
        <Route path="/news/:id" element={<NewsCardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
