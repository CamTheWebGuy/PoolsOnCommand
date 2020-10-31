import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/landing/Landing';
import Login from './components/layout/Login';
import MembersArea from './components/layout/MembersArea';
import AdminPanel from './components/layout/AdminPanel';
import ProductEdit from './components/layout/ProductEdit';

import Alert from './components/layout/Alert';
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
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path='/' component={Landing} />
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
