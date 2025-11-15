import { RouterProvider } from 'react-router';
import router from './routes/Router';
import AuthProvider from './hooks/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
