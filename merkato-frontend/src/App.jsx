import { CartProvider } from './components/context/CartContext';
import Router from './routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <CartProvider>
      <Router />
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
          },
          success: {
            iconTheme: {
              primary: '#A31621',
              secondary: '#fff',
            },
          },
        }}
      />
    </CartProvider>
  );
}

export default App;