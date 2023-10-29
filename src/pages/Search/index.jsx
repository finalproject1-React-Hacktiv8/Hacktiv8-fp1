import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { getNews } from "../../api/newsAPI";
import NewsCards from "../../components/NewsCards";
import SectionHeader from "../../components/SectionHeader";

const Search = () => {
  const { keyword } = useParams();

  const [data, setDatas] = useState(null);

  useEffect(() => {
    setDatas(null);
    getNews(keyword).then((res) => setDatas(res.data.articles));
  }, [keyword]);

  return (
    <>
      <SectionHeader title={`${keyword} News`} />
      {data ? <NewsCards data={data} /> : <InfinitySpin color="black" />}
    </>
  );
};

export default Search;
