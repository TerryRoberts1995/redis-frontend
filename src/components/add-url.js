import React, {useState, useEffect } from 'react';

export default function AddUrl(props) {
    const [urlInput, setUrlInput] = useState('');
    // const [url, setUrl] = useState('');
    // const [key, setKey] = useState('');

    const handleSubmit = () => {
        fetch("http://127.0.0.1:5000/url/add", {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify({ "url" : urlInput})
        })
        .then(res => res.json())
        .then(data => props.handleSubmitReload())
        .catch(error => console.log('Error has occured during your post request:', error));
    }


    return(

        <div>
            <input type='text' placeholder="URL"  value={urlInput} onChange={event => setUrlInput(event.target.value)}/>
            <button onClick={handleSubmit}>Submit Url</button>
        </div>
    )
}