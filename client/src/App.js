import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/landing/Landing';
import Login from './components/layout/Login';
import MembersArea from './components/layout/MembersArea';
import AdminPanel from './components/layout/AdminPanel';
import ProductEdit from './components/layout/ProductEdit';
import Checkout from './components/layout/Checkout';
import OTO1 from './components/layout/OTO1';

import PrivateRoute from './components/routing/PrivateRoute';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/oto-1' component={OTO1} />
            <Route exact path='/members-login' component={Login} />
            <PrivateRoute exact path='/members-area' component={MembersArea} />
            <PrivateRoute exact path='/admin-panel' component={AdminPanel} />
            <PrivateRoute exact path='/product/:id' component={ProductEdit} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
