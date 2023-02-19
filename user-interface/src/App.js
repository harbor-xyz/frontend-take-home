import Sidebar from './components/sidebar/sidebar';
import MainView from './components/main-view/main-view';

import './App.scss';

function App() {
  return (
    <div className="App">
      <section className="sidebar_container">
        <Sidebar />
      </section>
      <section className="mainview_container">
        <MainView />
      </section>
    </div>
  );
}

export default App;
