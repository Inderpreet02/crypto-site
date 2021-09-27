import moment from 'moment'
import React from 'react'
import "./NewsCard.css"
{/* <NewsCard date={item.datePublished} key={i} providerName={item?.provider[0]?.name} providerLogo={item?.provider[0]?.image?.thubnail?.contentUrl} title={item.name} des={item.description} src={item?.image?.thumbnail?.contentUrl}/> */}


function NewsCard( {date, providerName, providerLogo, url, title, desc, src }) {
    return (
        <div className="newsCard">
            <div className="newsCard__top">
               <a href={url} target="_blank">
                    <h1 className="newsCard__heading">
                        {title}   
                    </h1>
               </a>
                <img src={src} alt="" className="newsCard__img" />  
            </div>

            <div className="newsCard__desc">
                <p>
                    {desc}
                </p>
            </div>
            <div className="newsCard__footer">
                <div className="footer__info">
                    <img className="provider__logo" src={providerLogo} alt="name" />
                    <p>{providerName}</p>
                </div>
                <div className="date">
                    {moment(date).startOf('ss').fromNow()}
                </div>
            </div>
        </div>
    )
}

export default NewsCard
