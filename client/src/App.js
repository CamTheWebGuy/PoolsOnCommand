import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScrollToTop from './utils/ScrollToTop';
import Landing from './components/landing/Landing';
import Login from './components/layout/Login';
import MembersArea from './components/layout/MembersArea';
import AdminPanel from './components/layout/AdminPanel';
import ProductEdit from './components/layout/ProductEdit';
import Checkout from './components/layout/Checkout';
import OTO1 from './components/layout/OTO1';
import OTO2 from './components/layout/OTO2';
import DS1 from './components/layout/DS1';
import DS2 from './components/layout/DS2';
import OrderComplete from './components/layout/OrderComplete';
import CustomizeOrder from './components/layout/CustomizeOrder';

import PrivateRoute from './components/routing/PrivateRoute';
//import AdminRoute from './components/routing/AdminRoute';

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
          <ScrollToTop />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/oto-1' component={OTO1} />
            <Route exact path='/ds-1' component={DS1} />
            <Route exact path='/oto-2' component={OTO2} />
            <Route exact path='/ds-2' component={DS2} />
            <Route exact path='/order-complete' component={OrderComplete} />
            <Route exact path='/customize-order' component={CustomizeOrder} />
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
