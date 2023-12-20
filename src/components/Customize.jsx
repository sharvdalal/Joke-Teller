import React, { useEffect, useState } from 'react';

function Customize({setJokeLink}) {

    const [category, setCategory] = useState('any');
    const [joke, setJoke] = useState('https://v2.jokeapi.dev/joke/Any');

    const handleCategoryChange = (categoryName) => {
        setCategory(categoryName);
        if (categoryName === 'any') {
            setJoke('https://v2.jokeapi.dev/joke/Any');
        } else {
            const labelNames = ['program', 'misc', 'dark', 'pun', 'spooky']
                .filter((label) => document.getElementById(label).checked)
                .join(',');
            setJoke(`https://v2.jokeapi.dev/joke/${labelNames}`);
        }
    };

    const handleCheckboxChange = () => {
        if (category === 'custom') {
            const labelNames = ['Programming', 'Miscellaneous', 'Dark', 'Pun', 'Spooky']
                .filter((label) => document.getElementById(label).checked)
                .join(',');
            setJoke(`https://v2.jokeapi.dev/joke/${labelNames}`);
        }
    };

    useEffect(() => {
        setJokeLink(joke)
    }, [category,joke,setCategory, setJoke, handleCategoryChange, handleCheckboxChange])

    console.log(joke);

    return (
        <div>
            <p>Select Category</p>
            <label htmlFor="Any">Any</label>
            <input
                onChange={() => handleCategoryChange('any')}
                type="radio"
                name="sel"
                id="Any"
                checked={category === 'any'}
            />
            <br />
            <label htmlFor="custom">Custom</label>
            <input
                onChange={() => handleCategoryChange('custom')}
                type="radio"
                name="sel"
                id="custom"
                checked={category === 'custom'}
            />

            <label htmlFor="Programming">Programming</label>
            <input
                type="checkbox"
                name="Programming"
                id="Programming"
                disabled={category !== 'custom'}
                onChange={handleCheckboxChange}
            />

            <label htmlFor="Miscellaneous">Misc</label>
            <input
                type="checkbox"
                name="Miscellaneous"
                id="Miscellaneous"
                disabled={category !== 'custom'}
                onChange={handleCheckboxChange}
            />

            <label htmlFor="Dark">Dark</label>
            <input
                type="checkbox"
                name="Dark"
                id="Dark"
                disabled={category !== 'custom'}
                onChange={handleCheckboxChange}
            />

            <label htmlFor="Pun">Pun</label>
            <input
                type="checkbox"
                name="Pun"
                id="Pun"
                disabled={category !== 'custom'}
                onChange={handleCheckboxChange}
            />

            <label htmlFor="Spooky">Spooky</label>
            <input
                type="checkbox"
                name="Spooky"
                id="Spooky"
                disabled={category !== 'custom'}
                onChange={handleCheckboxChange}
            />
            
        </div>
    );
}

export default Customize;
