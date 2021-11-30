import { Router } from 'react-router-dom'
import React from 'react';
import { AppProvider } from '../Providers/AppProvider';
import { TiendaGenerica } from './TiendaGenerica';
import history from '../history';

function App() {

  return (
    <Router history={history}>
      <AppProvider>
        <TiendaGenerica />
      </AppProvider>
    </Router>
  );
}


export default App;
