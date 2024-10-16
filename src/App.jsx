import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {

  return (
    <div className="App">
      <QuoteBox />
    </div>
  );
}

export default App;


function QuoteBox() {

  const quotes = [
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr."
    },
    {
      text: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      author: "Ralph Waldo Emerson"
    },
    {
      text: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky"
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius"
    },
    {
      text: "Happiness is not something ready-made. It comes from your own actions.",
      author: "Dalai Lama"
    },
    {
      text: "Life is what happens when you’re busy making other plans.",
      author: "John Lennon"
    },
    {
      text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      author: "Ralph Waldo Emerson"
    },
    {
      text: "The best way to predict the future is to create it.",
      author: "Peter Drucker"
    }
  ];

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    console.log(randomIndex);
    return quotes[randomIndex];
  }

  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());

  function handleButtonClick() {
    setCurrentQuote(getRandomQuote());
  }

  return (
    <div className="quote-box" id='quote-box'>
      <h1>Random Quotes</h1>
      <p id='text'>{currentQuote.text}</p>
      <p id='author'>-{currentQuote.author}</p>
      <div className="ineractives">
        <button id='new-quote' onClick={handleButtonClick}>New Quote</button>
        <a target='_blank' href={"https://twitter.com/intent/tweet?text=" + currentQuote.text} rel='noreferrer' id='tweet-quote'>
          <div className="social-button">
            <FontAwesomeIcon icon={faTwitter} size='2xl' color='white' />
          </div>
        </a>
      </div>

    </div >
  );
}