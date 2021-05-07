import { GlobalContextProvider } from './provider/store';
import Home from './views/Home';

function App() {
  return (
    <GlobalContextProvider>
      <Home />
    </GlobalContextProvider>
  );
}

export default App;
