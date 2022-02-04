import React from 'react';
import Contact from './components/Contact';
import Handling from './components/Handling';
import Navbar from './components/Navbar';
import Options from './components/Options';
import Power from './components/Power';
import Speed from './components/Speed';

function App() {
  return (
    <>
      <Navbar/>
      <Power/>
      <Speed/>
      <Handling/>
      <Options/>
      <Contact/>
    </>
  );
}

export default App;
