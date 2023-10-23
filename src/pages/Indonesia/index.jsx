import { useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { getNews } from "../../api/newsAPI";
import NewsCards from "../../components/NewsCards";
import SectionHeader from "../../components/SectionHeader";

const Indonesia = () => {
  const [data, setDatas] = useState(null);

  useEffect(() => {
    getNews("Indonesia").then((res) => setDatas(res.data.articles));
  }, []);

  return (
    <>
      <SectionHeader title="News" />
      {data ? <NewsCards data={data} /> : <InfinitySpin color="black" />}
    </>
  );
};

export default Indonesia;
