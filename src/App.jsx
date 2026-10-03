import { useState } from "react";
import "./App.css";

const quotes = [
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "Success is the sum of small efforts, repeated day in and day out.",
    author: "Robert Collier",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Great things are done by a series of small things brought together.",
    author: "Vincent van Gogh",
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vincent Peale",
  },
];

function App() {
  const [currentQuote, setCurrentQuote] = useState(0);

  const generateQuote = () => {
    let newQuote;

    do {
      newQuote = Math.floor(Math.random() * quotes.length);
    } while (newQuote === currentQuote && quotes.length > 1);

    setCurrentQuote(newQuote);
  };

  return (
    <div className="app">
      <div className="quote-container">
        <div className="header">
          <div className="quote-icon">“</div>
          <h1>Random Quote</h1>
          <p>Get inspired with a new quote</p>
        </div>

        <div className="quote-card">
          <div className="quote-mark">“</div>

          <p className="quote-text">
            {quotes[currentQuote].text}
          </p>

          <p className="quote-author">
            — {quotes[currentQuote].author}
          </p>
        </div>

        <button className="generate-button" onClick={generateQuote}>
          New Quote
        </button>

        <footer>
          Developed by <strong>Nishanth</strong>
        </footer>
      </div>
    </div>
  );
}

export default App;