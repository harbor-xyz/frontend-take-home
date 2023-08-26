import { createMemoryRouter } from 'react-router-dom';
import App from '../App';
import Testnets from '../Testnets';

export const router = createMemoryRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'testnets',
        element: <Testnets />
      },
      {
        path: 'members',
        element: <App />
      }
    ]
  }
]);
