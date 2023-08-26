import { createContext, ReactNode } from 'react';
import useTestnets from './hooks/useTestnets';
import { testnetsType } from './Testnets/fetchTestnetsData';

type InitialState = {
  testnetsData: testnetsType[] | null;
  count: number;
};

const initialState = {
  testnetsData: null,
  count: 0
};

interface TestnetsProviderProps {
  children: ReactNode;
}

export const TestnetsContext = createContext<InitialState>(initialState);

const TestnetsProvider = ({ children }: TestnetsProviderProps) => {
  const { testnetsData, count } = useTestnets();

  return (
    <TestnetsContext.Provider value={{ testnetsData, count }}>{children}</TestnetsContext.Provider>
  );
};

export default TestnetsProvider;
