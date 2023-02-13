import axios from "axios";
import { useEffect, useState } from "react";

const useFetchExchanges = () => {

    var options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/exchanges',
        headers: {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key': '3744bb210bmsh9079a40f3323be6p16506djsn74dfee50bfc2'
        }
    };

    const [data, setData] = useState()

    useEffect(() => {

        axios.request(options).then(function (response) {
            setData(response.data)
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

    }, [])

    return { data }
      
}

export default useFetchExchanges;