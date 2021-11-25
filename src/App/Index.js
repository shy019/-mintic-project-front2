
import React from 'react';
import { AppProvider } from '../Provider/AppProvider';
import { TiendaGenerica } from './TiendaGenerica';

function App() {

  return (
    <AppProvider>
      <TiendaGenerica />
    </AppProvider>
  );
}


export default App;
