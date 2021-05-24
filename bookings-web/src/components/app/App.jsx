import React from 'react';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Getaways from '../../containers/Getaways';
import GetawaysDetails from '../../containers/GetawaysDetails';
import SignUp from '../../containers/SignUp';

export default function App() {
  return (
    <Router>
      <Switch>
        <BrowserRouter>
          <Route exact path='/' component={Getaways} />
          <Route path='/:id' component={GetawaysDetails} />
          <Route path='/signUp' component={SignUp} />
        </BrowserRouter>
      </Switch>
    </Router>
  );
}
