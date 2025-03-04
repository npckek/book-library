// src/App.js
import React from "react";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import UserInterface from "./components/UserInterface";
import AdminInterface from "./components/AdminInterface";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/admin" component={AdminInterface} />
              <Route path="/" component={UserInterface} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
