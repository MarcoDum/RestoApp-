import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App'
import Login from './Login';
import Register from './Register';

class Routes extends Component {
	render() {
		return (
        <div>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/Login"  component={Login} />
            <Route path="/Register"  component={Register} />
          </Switch>
        </div>
		);
	}
}

export default Routes;