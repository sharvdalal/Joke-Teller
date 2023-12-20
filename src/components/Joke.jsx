import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Joke({jokeLink}) {
    const [joke, setJoke] = useState({});



    useEffect(() => {
        axios.get(jokeLink)
            .then((response) => {
               
                setJoke(response.data);
            })
            .catch((error) => {
                console.error('Error fetching joke:', error);
            });
    }, []); 

    const generateJoke = () => {
        axios.get(jokeLink)
            .then((res) => {
               
                setJoke(res.data);
            })
            .catch((error) => {
                console.error('Error generating joke:', error);
            });
    }
    console.log(joke);
    console.log(joke.joke);


    return (
        <div>
            <button onClick={generateJoke}>Generate</button>
            <div>{joke.setup == null ? joke.joke : joke.setup}</div>
            <div>{joke.delivery == null? "" : joke.delivery}</div>
        </div>
    );
}

export default Joke;
