import { useState, useEffect } from 'react'
import Sidebar from './components/sidebar/sidebar';
import MainView from './components/main-view/main-view';

import './App.scss';

function App() {

  const [testnets, setTestnets] = useState([])

  const API = 'http://localhost:3000/testnets';

  const fetchTestnets = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        setTestnets(res.data.testnet)
      })
      .catch((e) => console.log('An error occurred while fetching data', e));
  }
  useEffect(() => {
    fetchTestnets()
  }, [])

  return (
    <div className="App">
      <section className="sidebar_container">
        <Sidebar testnetCount={testnets.length} />
      </section>
      <section className="mainview_container">
        <MainView testnets={testnets} />
      </section>
    </div>
  );
}

export default App;
