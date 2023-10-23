import axios from "axios";

export const getNews = async (keyword) => {
  return axios.get(
    `https://newsapi.org/v2/everything?q=${keyword}&pageSize=30&apiKey=453b8f32dc83403681ee7595ab3b4693`
  );
};
