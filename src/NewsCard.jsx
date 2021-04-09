import React from "react";
import newsData from "./newsData";
import NewsDesc from "./NewsDesc";
import NewsImg from "./NewsImg";
import NewsTitle from "./NewsTitle";
import NewsLink from "./NewsLink";
import NewsSource from "./NewsSource";
import NewsTime from "./NewsTime";

const NewsCard = () => {
  const dataLength = newsData.length;
  const randNo = Math.round(Math.random() * (dataLength-1));
  const linkImg =
    typeof newsData[randNo].urlToImage === "undefined"
      ? "https://picsum.photos/200"
      : newsData[randNo].urlToImage;
  const linkTitle = newsData[randNo].title;
  const linkSource = newsData[randNo].source.name;
  const linkTime = newsData[randNo].publishedAt;
  const linkDesc = newsData[randNo].description;
  const linkLink = newsData[randNo].url;

  return (
    <>
      <div id="news-box">
        <div id="news-img-box">
          <NewsImg img={linkImg} />
        </div>
        <div id="news-content-box">
          <NewsTitle title={linkTitle} />
          <div id="news-source-box">
          <NewsSource source={linkSource} />
          <NewsTime time={linkTime} />
          </div>
          <NewsDesc desc={linkDesc} />
          <NewsLink link={linkLink} />
        </div>
      </div>
    </>
  );
};

export default NewsCard;
