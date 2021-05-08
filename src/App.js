import React from "react"
import { Route, Router, Switch } from "react-router";
import './App.css';
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App ">
       
       <Router>
         <Switch>
           <Route path="/" >

           </Route>
           <Route path="/">


           </Route>
         </Switch>
       </Router>
           
      <Header />
      <div className="flex">
        <Sidebar  />
        <Main />
      </div>
    </div>
  );
}

export default App;
