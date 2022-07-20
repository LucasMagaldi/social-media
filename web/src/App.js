import React from "react";
import { Main } from "./pages";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
