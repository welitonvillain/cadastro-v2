import React from 'react';

import GlobalStyle from './styles/global';
import Navbar from './components/Navbar';
import Activity from './pages/Activity';

function App() {
  return (  
    <> 
      <GlobalStyle />
      <Navbar />
      <Activity />
    </>
  );
}

export default App;
