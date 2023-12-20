import React, { useState, useEffect } from 'react';
import Customize from './components/Customize';
import Joke from './components/Joke';
import axios from 'axios'

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const[jokeLink, setJokeLink] = useState('https://v2.jokeapi.dev/joke/Any');



  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

 

  return (
    <div
      className="h-screen flex flex-col items-center justify-center font-roboto"
      style={{
        background: 'linear-gradient(90deg, rgba(16,46,69,1) 0%, rgba(32,34,67,1) 52%, rgba(12,28,34,1) 100%)' 
      }}
    >
      <p className="text-white text-center text-4xl font-bold font">
        Let Me Tell You a Joke...
      </p>

      <div className="relative">
        <button
    onClick={toggleDropdown}
    className="m-5 relative bg-gradient-to-br from-indigo-900 to-indigo-800 border-double border-transparent border-2 px-3 py-1 rounded shadow text-white font-semibold uppercase transition duration-500 ease-in-out transform hover:scale-105 text-sm"
  >
    Customize Joke
  </button>


        {showDropdown && <Customize setJokeLink={setJokeLink}/>}
      </div>
      <Joke jokeLink = {jokeLink} />
    </div>
  );
};

function App() {
  return (
    <div>
      <Dropdown />
    </div>
  );
}

export default App;
