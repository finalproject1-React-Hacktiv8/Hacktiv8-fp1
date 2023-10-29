import { useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { getNews } from "../../api/newsAPI";
import NewsCards from "../../components/NewsCards";
import SectionHeader from "../../components/SectionHeader";

const Covid19 = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    getNews("COVID-19", thirtyDaysAgo.toISOString()).then((res) => {
      const filteredArticles = res.data.articles.filter(
        (article) => new Date(article.publishedAt) > thirtyDaysAgo
      );

      setArticles(filteredArticles);
    });
  }, []);

  return (
    <>
      <SectionHeader title="COVID-19 News" />
      {articles ? <NewsCards data={articles} /> : <InfinitySpin color="black" />}
    </>
  );
};

export default Covid19;
