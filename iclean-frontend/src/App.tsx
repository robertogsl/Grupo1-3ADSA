import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AppProvider } from './hooks';

import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppProvider>
        <ToastContainer autoClose={3000} />
        <Routes />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
