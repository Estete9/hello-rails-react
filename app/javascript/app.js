import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
