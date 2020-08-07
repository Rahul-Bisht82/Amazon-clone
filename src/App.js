import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
// import { auth } from "./Firebase";

function App() {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = "Amazon-Clone || Web-App";
  });

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
