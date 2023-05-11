import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const options = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/players',
        params: {search: 'james'},
        headers: {
          'X-RapidAPI-Key': 'c88ea079e8mshb2b985d98730896p1c722bjsn4505e7f9c114',
          'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
      };

    const fetchData = async () => {
        setIsLoading(true);

        try
        {
            const response = await axios.request
            (options);

            setData(response.data.data);
            setIsLoading(false);
        }

        catch (error)
        {
            setError(error);
            alert('There is an error');
        }

        finally
        {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;