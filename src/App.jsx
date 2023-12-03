import Boost from './components/Boost';
import Header from './components/Header';
import Hero from './components/Hero';
import Shortener from './components/Shortener';
import Shortens from './components/Shortens';
import Statistics from './components/Statistics';
import Footer from './components/Footer';

import { useState, useEffect } from 'react';
import axios from 'axios';

// getting stored results from local storage
const getStoredResults = () => {
  const storedResults = localStorage.getItem('results');
  return storedResults ? JSON.parse(storedResults) : [];
};

// storing results in local storage
const storeResults = (results) => {
  localStorage.setItem('results', JSON.stringify(results));
};

function App() {
  const [result, setResult] = useState(getStoredResults());
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_REACT_APP_KEY;

  useEffect(() => {
    // Store results in local storage whenever it changes
    storeResults(result);
  }, [result]);

  const handleShortUrl = async (url) => {
    const options = {
      method: 'POST',
      url: 'https://url-shortener23.p.rapidapi.com/shorten',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'url-shortener23.p.rapidapi.com',
      },
      data: { url },
    };

    try {
      setLoading(!loading);
      setError(false);
      const response = await axios.request(options);
      setResult((prevState) => {
        if (prevState.length >= 3) {
          return [...prevState.slice(1), response.data?.short_url];
        } else {
          return [...prevState, response.data?.short_url];
        }
      });
      setLoading(false);
    } catch (err) {
      setError(`${err.message}`);
    }
  };

  return (
    <div>
      <Header />
      <Hero />
      <Shortener handleShortUrl={handleShortUrl} data={result} error={error} loading={loading} />
      <Shortens link={result} />
      <Statistics />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
