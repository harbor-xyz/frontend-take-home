import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import TestnetsProvider from './TestnetsProvider';

const MainContainer = styled.div`
  display: flex;
`;
const App = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <TestnetsProvider>
          <Sidebar />
          <Outlet />
        </TestnetsProvider>
      </MainContainer>
    </>
  );
};

export default App;
