// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(<App />, document.getElementById('root'));

