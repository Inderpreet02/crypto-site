import { useEffect, useState } from "react";

var axios = require("axios").default;

const useFetchCoin = (coinId) =>{

    const [data, setData] = useState(null);

    var options = {
    method: 'GET',
    url: `https://coinranking1.p.rapidapi.com/coin/${coinId}`,
    headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '3744bb210bmsh9079a40f3323be6p16506djsn74dfee50bfc2'
    }
    };

    useEffect(() => {
        axios.request(options).then(function (response) {
            setData(response.data);
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

    },[])

    return { data }
}

export default useFetchCoin;