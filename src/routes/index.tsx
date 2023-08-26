import { createMemoryRouter, Navigate } from 'react-router-dom';
import App from '../App';
import Testnets from '../Testnets';

export const router = createMemoryRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Navigate to="/testnets" replace />
      },
      {
        path: 'testnets',
        element: <Testnets />,
        index: true
      }
    ]
  }
]);
