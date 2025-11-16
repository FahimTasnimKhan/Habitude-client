import { RouterProvider } from 'react-router';
import router from './routes/Router';
import AuthProvider from './hooks/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryclient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryclient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
