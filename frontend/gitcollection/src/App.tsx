import React from 'react';
import {Routes} from './routes/index'
import {BrowserRouter} from 'react-router-dom'
import { GlobalStyle } from './styles/global';

// criando componentes funcionais
const App: React.FC = () => {
  return (
    <>
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
   <GlobalStyle/>
    </>
  );
}

export default App;
