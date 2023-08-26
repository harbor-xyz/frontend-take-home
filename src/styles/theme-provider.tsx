import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { FunctionComponent, ReactNode } from 'react';
import { theme } from './theme';

interface ThemeProviderProps {
  children?: ReactNode;
}

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};
