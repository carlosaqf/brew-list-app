import React, { useState, useEffect } from 'react';
import './App.css';
import BreweryList from './components/BreweryList'
import axios from 'axios'

function App() {

  const url = `https://api.openbrewerydb.org/breweries`
  const [breweries, setBreweries] = useState({breweries: []})
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchBreweries = async () => {
      setLoading(true)
      const result = await axios(url);
      setBreweries(result.data);
      setLoading(false)
    };
    fetchBreweries();
  }, []);


  return (
    <div>
      {loading ? <h1>...Loading</h1> : <BreweryList breweries={breweries} />}
    </div>
  );
}

export default App;
