import { useEffect, useState } from 'react';

const useGetData = (sec) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`http://localhost:9000/${sec}`)
        .then(res => res.json())
        .then(newData => {
            setLoading(false)
            setData(newData)
        })
        .catch(err => {
            // console.log('error', err)
            setError(err)
            setLoading(false);
            setData([]);
        })
    }, [sec]);

    // if (loading) {
    //     return [loading]
    // }

    return {data, loading, error};
}

export default useGetData
