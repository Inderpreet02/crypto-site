import React from 'react'
import FetchNews from './FetchNews'
import NewsCard from './NewsCard';
import "./News.css"
import ReactLoading from "react-loading";

function News() {

    const { data: NewsData } = FetchNews();
    const news = NewsData?.value;

    console.log(news);
    return (
        <div className="news">
            <h1>News</h1>
            {news ?  
            <div className="news__container">
                {news.map((item, i)=>(
                    <NewsCard url={item.url} date={item.datePublished} key={i} providerName={item?.provider[0]?.name} providerLogo={item?.provider[0]?.image?.thumbnail?.contentUrl} title={item.name} desc={item.description} src={item?.image?.thumbnail?.contentUrl}/>
                ))}
            </div> 
                : 
            <ReactLoading
                className="loading"
                type={"balls"}
                color={"rgb(3, 3, 32)"}
                height={100}
                width={100}
                />
            }
        </div>
    )
}

export default News