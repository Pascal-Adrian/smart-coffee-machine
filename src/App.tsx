import { RouterProvider } from 'react-router';
import router from './router/router';
import './styles/modern-normalize.css';
import './styles/reset.css';
import './styles/index.css';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
