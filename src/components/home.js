import React, {useState,useEffect } from 'react';
import AddUrl from './add-url';
import Url from './url';

export default function Home() {
    const [allUrlKeys, setUrlKeys] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const getAllUrlKeys = () => {
        fetch('http://127.0.0.1:5000/url/get')
        .then(res => res.json())
        .then(resData => setUrlKeys(resData))
        .catch(error => console.log('Error with getting keys/urls.', error));
    };

    const handleSubmitReload = () => {
        setSubmitted(true);
    }

    useEffect(() => {
        getAllUrlKeys();
        setSubmitted(false);
    },[submitted]);

    const renderKeys = () => {
        return allUrlKeys.map(key => {
            return <Url key={key} url={key}/>
        })
    }

    return(
        
        <div>
            <div className="AddUrl-container"><AddUrl handleSubmitReload={handleSubmitReload}/></div>
            <div>{renderKeys()}</div>
        </div>
    )
}