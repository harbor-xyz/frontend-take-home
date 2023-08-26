import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const MainContainer = styled.div`
  display: flex;
`;
const App = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Sidebar />
        <Outlet />
      </MainContainer>
    </>
  );
};

export default App;
