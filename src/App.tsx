import { RouterProvider } from 'react-router';
import router from './router/router';
import './styles/modern-normalize.css';
import './styles/reset.css';
import './styles/index.css';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
