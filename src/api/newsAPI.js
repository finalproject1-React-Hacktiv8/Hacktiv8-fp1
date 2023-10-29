import axios from "axios";

export const getNews = async (keyword) => {
  return axios.get(
    `https://newsapi.org/v2/everything?q=${keyword}&pageSize=30&apiKey=5fb36e6e547f4c6da7134f8f02c0c680`
  );
};
