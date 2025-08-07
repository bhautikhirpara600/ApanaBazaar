import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from 'react-redux';
import App from './App.jsx'
import Home from './components/Home.jsx';
import Cart from './components/Cart.jsx';
import { store } from './store/store.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Provider store={store}><App /></Provider>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/cart",
        Component: Cart
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
  </StrictMode>,
)
