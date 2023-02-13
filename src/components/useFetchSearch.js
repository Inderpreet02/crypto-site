import axios from "axios";
import { useEffect } from "react";


const useFetchSearch = () => {
    var options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coin/1',
        headers: {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key': '3744bb210bmsh9079a40f3323be6p16506djsn74dfee50bfc2'
        }
    };

    const [data, setdata] = useState()
    useEffect(() => {
          
        axios.request(options).then(function (response) {
          console.log(response.data);
          setdata(response.data)
        }).catch(function (error) {
          console.error(error);
        });

    },[])

    return {data};
      
}

export default useFetchSearch;