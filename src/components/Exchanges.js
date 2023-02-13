import React from 'react'
import useFetchExchanges from './useFetchExchanges'
import ReactLoading from "react-loading"
import "./Exchanges.css"
import millify from 'millify';

function Exchanges() {

    const { data } = useFetchExchanges();
    
    const useExchanges = data?.data?.exchanges
    console.log(useExchanges);
    if(!useExchanges){
        return(
            <ReactLoading
                className="loading"
                type={"balls"}
                color={"rgb(3, 3, 32)"}
                height={100}
                width={100}
                />
        )
    }
    return (
        <div className="exe">
            <h1 className="exe__heading">
                Exchanges will be here.
            </h1>
            <div className="exe__container">
                {
                    useExchanges.map((item)=>(
                        <div className="exe__box">
                            <div className="exe__boxName">
                                <img className="box__icon" src={item.iconUrl} alt="bruv" />
                                <h4 className="exe__boxLabel">
                                    <div className="exe__rank">
                                        {item.rank}.
                                    </div>
                                    <div className="exe__name">
                                        {item.name}
                                    </div>
                                </h4>
                            </div>

                            <div className="box__info">
                                <p>No of Markets: {item.numberOfMarkets}</p>
                                <p>Volume: {millify(item.volume)}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Exchanges
