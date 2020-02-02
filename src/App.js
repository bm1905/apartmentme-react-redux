import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import { Provider } from 'react-redux';

import Header from 'components/shared/Header';
import { InfoFooter } from 'components/shared/InfoFooter';
import { Footer } from 'components/shared/Footer';
import RentalListing from 'components/rental/rental-listing/RentalListing';
import RentalSearchListing from 'components/rental/rental-listing/RentalSearchListing';
import RentalDetail from 'components/rental/rental-detail/RentalDetail';
import { RentalCreate } from 'components/rental/rental-create/RentalCreate';
import { HomePage } from 'components/home/HomePage';
import Login from 'components/login/Login';
import { Register } from 'components/register/Register';

import { ProtectedRoute } from 'components/shared/auth/ProtectedRoute';
import { LoggedInRoute } from 'components/shared/auth/LoggedInRoute';

import * as actions from 'actions';

import 'App.css';

const store = require('./reducers').init();

// import logo from './logo.svg';


class App extends Component {

  componentWillMount() {
    this.checkAuthState();
  }

  checkAuthState() {
    store.dispatch(actions.checkAuthState());
  }

  logout() {
    store.dispatch(actions.logout());
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='App'>
            <Header logout={this.logout}/>
            <Route exact path='/' component={HomePage} />
            <div className='container'>
              <Switch>
                <Route exact path='/rentals' component={RentalListing} />
                <Route exact path='/rentals/:city/homes' component={RentalSearchListing} />
                <ProtectedRoute exact path='/rentals/new' component={RentalCreate} />
                <Route exact path='/rentals/:id' component={RentalDetail} />
                <Route exact path='/login' component={Login} />
                <LoggedInRoute exact path='/register' component={Register} />
              </Switch>
            </div>
            <InfoFooter />
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
