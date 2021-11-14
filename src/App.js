import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import GlobalStats from './components/GlobalStats';
import StatsTable from './components/StatsTable';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);
  const [country, setCountry] = useState('');
  function handleClick(val) {
    setCountry(val);
    setShow(false);
  }
  return (
    <div className="App">
      <Header />
      <SearchBar handleClick={handleClick}/>
      {show && <div>
        <GlobalStats />
        <StatsTable />
      </div>}
      {!show && 
        <div>
          Show personal country data {country}
        </div>
      }
      <Footer />
    </div>
  );
}

export default App;
