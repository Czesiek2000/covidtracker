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

  function handleReset(){
    setCountry('');
    setShow(true);
  }

  return (
    <div className="App">
      <Header />
      <SearchBar handleClick={handleClick} handleReset={handleReset} />
      {show && <div>
        <GlobalStats />
        <StatsTable />
      </div>}
      {!show &&
        <div>
          <PersonalInfo country={country} handleReset={handleReset}/>
        </div>
      }
      <Footer />
    </div>
  );
}

export default App;
