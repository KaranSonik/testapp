import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/navbar/Navbar";
import Panel from "./components/panel/Panel";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Navbar/>
        <Switch>
          
          
          <Route exact path="/dashboard">
            <Dashboard/>
          </Route>

        </Switch>
      </Router>
      <Panel/>
   
    </React.StrictMode>
  );
}

export default App;
