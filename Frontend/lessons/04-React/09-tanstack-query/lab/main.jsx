import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

// משימה 1: הקימו מופע חדש של QueryClient
const queryClient = new QueryClient();

const container = document.getElementById('root');
const root = createRoot(container);

// משימה 2: עטפו את App ב-QueryClientProvider והעבירו לו את ה-queryClient
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
