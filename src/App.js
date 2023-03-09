import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignUp, Login, Error, PageNotFound } from './pages';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/error/:errorCode" element={<Error />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;