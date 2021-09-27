import millify from 'millify';
import React, { useState } from 'react'
import { useParams } from 'react-router';
import "./CryptoDetails.css"
import useFetchCoin from './useFetchCoin'
import ReactLoading from "react-loading";
import HTMLReactParser from 'html-react-parser';
import useFetchCoinHistory from './useFetchCoinHistory';
import LineChart from './LineChart';

function CryptoDetails() {
    const { coinId } = useParams();
    const [timePeriod, setTimePeriod] = useState('7d')
    const { data: coinInfo, isFetching } = useFetchCoin(coinId);
    const { data: coinHistory} = useFetchCoinHistory( { coinId, timePeriod })
    const useCoin = coinInfo?.data?.coin;
    console.log(coinHistory);

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    if(!useCoin){

        return <ReactLoading
                    className="loading"
                    type={"balls"}
                    color={"rgb(3, 3, 32)"}
                    height={100}
                    width={100}
                    />
    }
    const stats = [
        { title: 'Price to USD', value: `$ ${useCoin?.price && millify(useCoin?.price)}` },
        { title: 'Rank', value: useCoin.rank },
        { title: '24h Volume', value: `$ ${useCoin.volume && millify(useCoin.volume)}` },
        { title: 'Market Cap', value: `$ ${useCoin.marketCap && millify(useCoin.marketCap)}` },
        { title: 'All-time-high(daily avg.)', value: `$ ${millify(useCoin.allTimeHigh.price)}`},
    ];

    const genericStats = [
        { title: 'Number Of Markets', value: useCoin.numberOfMarkets },
        { title: 'Number Of Exchanges', value: useCoin.numberOfExchanges},
        { title: 'Aprroved Supply', value: "True" },
        { title: 'Total Supply', value: `$ ${millify(useCoin.totalSupply)}` },
        { title: 'Circulating Supply', value: `$ ${millify(useCoin.circulatingSupply)}`},
    ];
    return (
        <div className="details">
            <div className="details__container">
                <div className="details__containerTop">
                    <h1 className="details__heading">
                        {useCoin.name} ({useCoin.slug}) Price
                    </h1>
                    <p className="details__headingTopdesc">
                        Live Price and other usefull shit comes here    
                    </p>    
                </div>

                <div className="details__main">
                    <div className="details__mainTime">
                        <select className="detail__mainSelect" defaultValue='7d' onChange={(value)=>setTimePeriod(value)} placeholder="Select Time Period">
                            {time.map((date)=><option key={date}>{date}</option>)}
                        </select>
                    </div>

                    <LineChart coinHistory={coinHistory} currentPrice={millify(useCoin.price)} coinName={useCoin.name}/>

                    <div className="details__statsContainer">
                        <h1>{useCoin.name} value stats</h1>
                        <div className="detail__stats">
                            <div className="detail__stat">
                                {stats.map((item)=>(
                                    <div className="stat__box">
                                        <div className="stat__name">
                                            {item.title}
                                        </div>
                                        <div className="stat__value">
                                            {item.value}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="detail__stat">
                                {genericStats.map((item)=>(
                                    <div className="stat__box">
                                        <div className="stat__name">
                                            {item.title}
                                        </div>
                                        <div className="stat__value">
                                            {item.value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="details__desc">
                        <div className="detail__descMain">
                            <h1 className="detail__descHeading">
                                What is {useCoin.name}
                            </h1>
                            {HTMLReactParser(useCoin.description)}
                        </div>

                        <div className="detail__links">
                            {
                                useCoin.links.map((link)=>(
                                    <div className="coin__link">
                                        <div className="link__title">
                                            {link.type}
                                        </div>

                                        <a href={link.url} target="_blank">{link.name}</a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CryptoDetails
