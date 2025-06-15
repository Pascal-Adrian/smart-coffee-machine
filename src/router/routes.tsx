import type { RouteObject } from 'react-router';
import Home from '../pages/Home';
import CoffeeMachine from '../pages/CoffeeMachine';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/machine',
    element: <CoffeeMachine />,
  },
];

export default routes;
