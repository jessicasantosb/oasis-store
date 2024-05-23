import { Toaster } from 'react-hot-toast';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import CartProvider from './contexts/CartContext';
import Home from './pages/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <>
      <CartProvider>
        <Toaster position='top-center' reverseOrder={false} />
        <RouterProvider router={router} />
      </CartProvider>
    </>
  );
}

export default App;
