import React from 'react';
// import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Testnets from './containers/Testnets';


function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3"><Sidebar /></div>
          <div className="col bg-light"> <Testnets /></div>
        </div>
      </div>
    </>
  );
}

export default App;
