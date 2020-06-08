import React, { Component } from 'react';
import {Route, Switch,withRouter} from 'react-router-dom';
import Homepage from "./containers/Homepage/Homepage";
import SignUp from "./containers/SignUp/SignUp";
import Login from "./containers/Login/Login";
import Home from "./containers/Properties/Home";
import About from "./containers/Properties/About";
import Downloads from "./containers/Properties/Downloads";
import Settings from "./containers/Properties/Settings";
import Session from "./containers/Properties/Session";



class App extends Component {
  render() {
    return (
      <div>
      <Switch>
        <Route path="/signup" component={SignUp}/>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/settings" component={Settings} />
        <Route path="/downloads" component={Downloads} />
        <Route path="/session" component={Session} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Homepage} />
      </Switch>
      </div>
    );
  }
}

export default withRouter(App);
