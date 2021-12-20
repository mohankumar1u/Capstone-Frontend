import React,{ useState } from "react";
import Home from "../screens/home/Home";
import Header from"../common/header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";


const Controller = () => {
  const baseUrl = "/api/v1/";
  const [login,setLogin] = useState(false)
  return (
    <Router>
      <div className="main-container">
        <Header login={login} setLogin={setLogin}/>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} baseUrl={baseUrl} />}
        />
      </div>
    </Router>
  );
};

export default Controller;
