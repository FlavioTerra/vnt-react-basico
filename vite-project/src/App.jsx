import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { AppContextProvider } from './contexts';

import './App.css';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppContextProvider>
  )
}

export { App };