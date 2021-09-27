import React from 'react'
import CryptoCard from './CryptoCard';
import useFetchcryptoData from './useFetchcryptoData';
import "./Cryptos.css"
import { Link } from 'react-router-dom';
import ReactLoading from "react-loading";

function Cryptos( {count} ) {

    const { data: coinData } = useFetchcryptoData(count);
    const cryptos = coinData?.data?.coins;

    return (
        <div className="crypto">
            <div className="crypto__head">
                <h1>Cryptocurrencies</h1>
                <Link to="/cryptos" className="showMore">
                    {count===10 ? "Show More" : ""}
                </Link>
            </div>
            {cryptos ? <div className="crypto__container">
                {cryptos?.map((item)=>(
                    <CryptoCard key={item.rank} id={item.id} rank={item.rank} change={item.change} name={item.name} src={item.iconUrl} price={item.price} marketCap={item.marketCap}/>
                ))}
            </div> :
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

export default Cryptos


// allTimeHigh: {price: '64185.10833403135', timestamp: 1618358400000}
// approvedSupply: true
// change: 0.84
// circulatingSupply: 18826100
// color: "#f7931A"
// confirmedSupply: true
// description: "<p>Bitcoin is the first digital currency that allows users to send and receive money, without the interference of a central bank or government. Instead, a network of thousands of peers is controlling the transactions; a decentralized system.</p>\n\n<h3>Why does bitcoin have value?</h3>\n\n<p>Bitcoin&rsquo;s useful qualities (decentralized, borderless, secure) aren&rsquo;t the only reason the coin is worth so much. Due to its scarcity (and it&rsquo;s hard to produce), Bitcoin is often nicknamed &lsquo;Digital Gold&rsquo;, in reference to &lsquo;classic&rsquo; physical gold. Like gold, Bitcoin also has a finite supply of coins available; there will only ever be 21 million bitcoin. And now you know why the creation of new bitcoins is also called mining.</p>\n\n<h3>No inflation in bitcoin</h3>\n\n<p>Bitcoin was invented in response to a few concerns the inventor(s) had, such as inflation. Its supply is limited, so one cannot just devalue the currency by printing more, as governments often do with fiat currencies (USD, EUR, etc.).</p>\n\n<p>As people look for alternative places to keep their money rather than losing value in a negative interest rate account, Bitcoin becomes more appealing. Big global companies, such as Tesla and MicroStrategy already purchased serious amounts of Bitcoin. And it&#39;s only a matter of time that other companies will follow. This also ensures that the value remains or continues to increase.</p>\n\n<h3>Who built Bitcoin</h3>\n\n<p>In 2008, Bitcoin was invented by an anonymous person or group named Satoshi Nakamoto. In 2009, Bitcoin was released as open-source software. Nakamoto&rsquo;s real identity is still unknown, although there are many theories about who it might be. Decentralization is one of Bitcoin&rsquo;s most important principles, and that&rsquo;s why this anonymity is perfectly in line.</p>\n\n<h3>The technology of Bitcoin</h3>\n\n<p>The Bitcoin blockchain is a database, the so-called &lsquo;ledger&rsquo;, that consists of bitcoin transaction records. For new transactions to be added to the ledger, the nodes must agree that the transaction is real and valid. The blockchain is public and contains records of all the transactions taking place.</p>\n\n<h3>How to buy bitcoin?</h3>\n\n<p>Continue reading <a href=\"https://coinranking.com/blog/how-to-buy-your-first-bitcoin/\" rel=\"nofollow noopener\" target=\"_blank\">this blog article</a> on how to buy your first bitcoin.</p>\n"
// firstSeen: 1330214400000
// history: (27) ['42257.6187781784', '42341.8479386736', '42612.1244530636', '43039.9870491045', '42923.2751433465', '42917.473228935', '42785.9547891298', '42502.3853295665', '42476.0486091804', '42506.0816480944', '42749.9708268426', '42698.7098731657', '42607.4070488044', '42715.297202514', '42358.3824152516', '42232.3965270319', '42766.1113690301', '42675.7319365491', '42439.5064320125', '42412.2813747958', '42591.6634017016', '42359.298933914', '42578.4631750137', '42550.5282928813', '42640.3965528482', '42611.4628657361', '42612.6865188198']
// iconType: "vector"
// iconUrl: "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg"
// id: 1
// links: Array(9)
// 0: {name: 'bitcoin.org', type: 'website', url: 'https://bitcoin.org'}
// 1: {name: 'Bitcoin Whitepaper', url: 'https://bitcoin.org/bitcoin.pdf', type: 'website'}
// 2: {name: 'bitcoinmagazine.com', url: 'https://bitcoinmagazine.com/', type: 'website'}
// 3: {name: 'BitcoinTalk', url: 'https://bitcointalk.org/', type: 'bitcointalk'}
// 4: {name: 'blockchain.com', url: 'https://www.blockchain.com/explorer', type: 'explorer'}
// 5: {name: 'bitcoin/bitcoin', url: 'https://github.com/bitcoin/bitcoin', type: 'github'}
// 6: {name: 'r/bitcoin', url: 'https://www.reddit.com/r/bitcoin/', type: 'reddit'}
// 7: {name: 'Bitcoin_Magazine', url: 'https://t.me/Bitcoin_Magazine', type: 'telegram'}
// 8: {name: 'bitcoin', url: 'https://t.me/bitcoin', type: 'telegram'}
// length: 9
// [[Prototype]]: Array(0)
// listedAt: 1330214400
// marketCap: 802230697672
// name: "Bitcoin"
// numberOfExchanges: 346
// numberOfMarkets: 21611
// penalty: false
// price: "42612.6865188198"
// rank: 1
// slug: "bitcoin-btc"
// socials: (2) [{…}, {…}]
// symbol: "BTC"
// totalSupply: 18826100
// type: "coin"
// uuid: "Qwsogvtv82FCd"
// volume: 31434974787
// websiteUrl: "https://bitcoin.org"