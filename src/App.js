import React from "react";
import "./App.css";
import "./Props.css";
import {BrowserRouter,Route,Link} from "react-router-dom"
import HomePage from "./components/Home"
import Header from "./components/Header"

function App() {
  return (
  <BrowserRouter>
  <Header/>
  <Route path = "/" component={HomePage}/>
  </BrowserRouter>
  );
}

export default App;
