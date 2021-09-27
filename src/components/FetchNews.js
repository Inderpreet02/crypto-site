import { useEffect, useState } from "react";

var axios = require("axios").default;

const FetchNews = () =>{

    const [data, setData] = useState(null)
    var options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news/search',
      params: {q: 'Crypto', safeSearch: 'Off', textFormat: 'Raw', freshness: 'Day'},
      headers: {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': '3744bb210bmsh9079a40f3323be6p16506djsn74dfee50bfc2'
      }
    };

    useEffect(()=>{

        axios.request(options).then(function (response) {
            setData(response.data);
        }).catch(function (error) {
            console.error(error);
        });

    }, [])

    return { data }
}

export default FetchNews;