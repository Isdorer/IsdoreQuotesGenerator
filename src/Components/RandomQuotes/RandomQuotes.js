import React, { useState, useEffect } from 'react';
import './RandomQuotes.css';

import twitter_icon from '../Assets/Xlogo.png';
import reload_icon from '../Assets/reload.png';

function RandomQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({
    text: "difficulties increase the nearer we get the goal.",
    author: "Jonathan wolfang von Goethe"
  });

  useEffect(() => {
    async function loadQuotes() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      setQuotes(data);
    }
    loadQuotes();
  }, []);

  const random = () => {
    const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(selectedQuote);
  };

  const twitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`);
  };

  return (
    <div className='container'>
      <div className='quote'>{quote.text}</div>
      <div>
        <div className='line'></div>
        <div className='bottom'>
          <div className='author'>- {quote.author.split(',')[0]}</div>
          <div className='icons'>
            <img className='reload' src={reload_icon} onClick={random} alt='' />
            <img className='twitter' src={twitter_icon} onClick={twitter} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomQuotes;
