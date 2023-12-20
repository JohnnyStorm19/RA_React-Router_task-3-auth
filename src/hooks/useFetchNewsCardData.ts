import axios from "axios";
import { useEffect, useState } from "react";
import { INews } from "../models";

export const useFetchNewsCardData = (token: { token: string }, id: string) => {
  const [newsCardData, setNewsCardData] = useState<INews | null>(null);
  const [newsLoading, setNewsLoading] = useState(false);
  const [newsError, setNewsError] = useState({ message: "" });

  useEffect(() => {
    const getNewsCardData = async () => {
      try {
        setNewsLoading(true);
        setNewsError({ message: "" });

        const response = await axios({
          method: "get",
          url: `/private/news/${id}`,
          baseURL: "http://localhost:7070",
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        });
        setNewsCardData(response.data);
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
      getNewsCardData();
    }
  }, [id, token]);

  return [{ newsCardData, newsLoading, newsError }];
};
