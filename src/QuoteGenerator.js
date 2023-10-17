import './styles.css';
import {useState, useEffect} from 'react';
function Quote() {
  const [quote, setQuote] = useState({});

  const newQuote = () => {
    fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      setQuote(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  };
  useEffect(() => {
    newQuote();
  }, []);
  return (
    <body>
      <h1>
        Quote Generator
      </h1>
      <p>{quote.content}</p>
      <p class = "cite">- {quote.author}</p>
      <button class = "refresh" onClick = {newQuote}>Give me a quote!</button>
    </body>
  );
}

export default Quote;
