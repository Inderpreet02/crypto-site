import {useState, useEffect} from 'react'
import axios from "axios";

const useFetchcryptoData = (count) =>{

    const [data, setdata] = useState(null);

    var options = {
        method: 'GET',
        url: `https://coinranking1.p.rapidapi.com/coins?limit=${count}`,
        headers: {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key': '3744bb210bmsh9079a40f3323be6p16506djsn74dfee50bfc2'
        }
    };
    
    useEffect(()=>{
        axios.request(options).then(function (response) {
            // console.log(response.data);
            setdata(response.data);
        }).catch(function (error) {
            console.error(error);
        });
        // eslint-disable-next-line
    }, [])

    return {data};
}

export default useFetchcryptoData;


