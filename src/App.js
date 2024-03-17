import './App.css';
import HomeBox from './pages/HomeBox';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider className="App" client={queryClient}>
      <HomeBox />
    </QueryClientProvider>
  );
}

export default App;
