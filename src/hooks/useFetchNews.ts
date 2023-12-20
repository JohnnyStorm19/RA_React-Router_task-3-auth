import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../globals";

export const useFetchNews = (token: { token: string }) => {
  const [newsData, setNewsData] = useState([]);
  const [newsLoading, setNewsLoading] = useState(false);
  const [newsError, setNewsError] = useState({message: ''});

  useEffect(() => {
    const getNews = async () => {
      try {
        setNewsLoading(true);
        setNewsError({message: ''})
        
        const response = await axios({
          method: "get",
          url: "/private/news",
          baseURL: BASE_URL,
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        });
        setNewsData(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error.response?.data.message);
            setNewsError({ message: error.response?.data.message });
          } else {
            console.error(error);
          }
      } finally {
        setNewsLoading(false);
      }
    };

    if (token.token.length > 0) {
      getNews();
    }
  }, [token]);

  return [{ newsData, newsLoading, newsError }];
};
