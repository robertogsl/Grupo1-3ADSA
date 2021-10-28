import { BrowserRouter } from 'react-router-dom';

import { AppProvider } from './hooks';

import { Routes } from "./routes/Routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppProvider>
        <Routes />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
