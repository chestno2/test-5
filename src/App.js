import React from "react"
import './App.css';
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App ">
      <Header />
      <div className="flex">
        <Sidebar  />
        <Main />
      </div>
    </div>
  );
}

export default App;
