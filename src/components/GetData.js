import React, { useEffect, useState } from 'react'

const GetData = (sec) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9000/${sec}`)
        .then(res => res.json())
        .then(newData => setData(newData));
    }, []);

    if(!data) {
        return <div>Loading...</div>;
    }

    return data;
}

export default GetData