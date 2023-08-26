import { createContext, ReactNode } from 'react';
import useTestnets from './hooks/useTestnets';
import { testnetsType } from './Testnets/fetchTestnetsData';

type InitialState = {
  testnetsData: testnetsType[] | null;
  count: number;
  isLoading: boolean;
};

const initialState = {
  testnetsData: null,
  count: 0,
  isLoading: false
};

interface TestnetsProviderProps {
  children: ReactNode;
}

export const TestnetsContext = createContext<InitialState>(initialState);

const TestnetsProvider = ({ children }: TestnetsProviderProps) => {
  const { testnetsData, count, isLoading } = useTestnets();

  return (
    <TestnetsContext.Provider value={{ testnetsData, count, isLoading }}>
      {children}
    </TestnetsContext.Provider>
  );
};

export default TestnetsProvider;
