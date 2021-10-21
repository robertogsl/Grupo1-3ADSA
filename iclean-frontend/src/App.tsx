import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'

import { RegisterProvider } from './hooks/register';

import { Routes } from "./routes/Routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RegisterProvider>
        <Routes />
      </RegisterProvider>
    </BrowserRouter>
  );
}

export default App;
