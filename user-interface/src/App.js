import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import MainView from './components/main-view/main-view';
import useFetch from './hooks/use-fetch';
import { FETCH_STATUS } from './utils/mapping';

import './App.scss';

function App() {
  const TESTNET_API_ENDPOINT = 'http://localhost:3000/testnets';

  const { data, status, error } = useFetch(TESTNET_API_ENDPOINT);

  return (
    <div className="App">
      <Router>
        <section className="sidebar_container">
          <Sidebar testnetCount={data?.data?.testnet.length ?? 0} />
        </section>
        <section className="mainview_container">
          {data?.data?.testnet && <MainView testnets={data.data.testnet} />}
          {status === FETCH_STATUS.ERROR && <h3 className="App__error">An error occurred while fetching the data, please try again after some time.</h3>}
        </section>
      </Router>
    </div>
  );
}

export default App;
