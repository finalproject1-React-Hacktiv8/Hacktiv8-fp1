import { useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { getNews } from "../../api/newsAPI";
import NewsCards from "../../components/NewsCards";
import SectionHeader from "../../components/SectionHeader";

const Covid19 = () => {
  const [data, setDatas] = useState(null);

  useEffect(() => {
    getNews("Covid").then((res) => setDatas(res.data.articles));
  }, []);

  return (
    <>
      <SectionHeader title="COVID 19 News" />
      {data ? <NewsCards data={data} /> : <InfinitySpin color="black" />}
    </>
  );
};

export default Covid19;
