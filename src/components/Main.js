import "./Main.css"
import {React} from 'react'
import useFetchGlobalData from "./useFetchGlobalData"
import millify from "millify";
import Cryptos from "./Cryptos";
import News from "./News";
import ReactLoading from "react-loading";

function Main() {

    const { data, isFetching } = useFetchGlobalData();
    const globalStats = data?.data;

    if(isFetching) return "Loading ....."
    // console.log(globalStats);
    return (
        <div className="main">
            <h1>Global Crypto Stats</h1>
            {globalStats ?
            <div className="main__container">
                <div className="main__stats">
                    <div className="main__stat">
                        <h1 className="stat__heading">
                            Total Cryptocurrencies
                        </h1>
                        <p className="stat__data">
                            {millify(globalStats?.totalCoins)}
                        </p>
                    </div>
                    <div className="main__stat">
                        <h1 className="stat__heading">
                            Total Market Cap
                        </h1>
                        <p className="stat__data">
                            {millify(globalStats?.totalMarketCap)}
                        </p>
                    </div>
                    <div className="main__stat">
                        <h1 className="stat__heading">
                            Total Markets
                        </h1>
                        <p className="stat__data">
                            {millify(globalStats?.totalMarkets)}
                        </p>
                    </div>
                </div>
                <div className="main__stats">
                    <div className="main__stat">
                        <h1 className="stat__heading">
                            Total Exchanges
                        </h1>
                        <p className="stat__data">
                            {millify(globalStats?.totalExchanges)}
                        </p>
                    </div>
                    <div className="main__stat">
                        <h1 className="stat__heading">
                            Total 24h Volume
                        </h1>
                        <p className="stat__data">
                            {millify(globalStats?.total24hVolume)}
                        </p>
                    </div>
                </div>
            </div> : 
                <ReactLoading
                    className="loading"
                    type={"balls"}
                    color={"rgb(3, 3, 32)"}
                    height={100}
                    width={100}
                />
            }
            <Cryptos count={10}/>
            <News/>
        </div>
    )
}

export default Main
