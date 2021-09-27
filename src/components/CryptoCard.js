import millify from 'millify'
import React from 'react'
import { Link } from 'react-router-dom'
import "./CryptoCard.css"
function CryptoCard({ rank, id, src, change, name, price, marketCap }) {


    return (
        <Link to={`crypto/${id}`} className="link cryptoCard">

            <div className="cryptoCard__top">
                <h4 className="cryptoCard__name">
                    {rank}. {name}
                </h4>
                <img className="cryptoCard__img" src={src} alt="" />
            </div>

            <div className="cryptoCard__data">
                <p className="cryptoCard__data">
                    Price: {millify(price)}
                </p>
                <p className="cryptoCard__data">
                    Market Cap: {millify(marketCap)}
                </p>
                <p className="cryptoCard__data">
                    Daily Change: {change}%
                </p>
            </div>

        </Link>

    )
}

export default CryptoCard

