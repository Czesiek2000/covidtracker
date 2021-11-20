import './App.css';
import { useState } from 'react';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import GlobalStats from './components/GlobalStats';
import StatsTable from './components/StatsTable';
import Footer from './components/Footer';
import PersonalInfo from './components/PersonalInfo';

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
          <PersonalInfo country={country}/>
        </div>
      }
      <Footer bottom={country.length > 0}/>
    </div>
  );
}

export default App;
