import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import Header from 'components/shared/Header';
import { InfoFooter } from 'components/shared/InfoFooter';
import { Footer } from 'components/shared/Footer';
import RentalListing from 'components/rental/rental-listing/RentalListing';
import RentalSearchListing from 'components/rental/rental-listing/RentalSearchListing';
import RentalDetail from 'components/rental/rental-detail/RentalDetail';
import { RentalCreate } from 'components/rental/rental-create/RentalCreate';
import { ContactUs } from 'components/contactUs/ContactUs';
import { AboutUs } from './components/shared/aboutUs/AboutUs';
import { Survey } from 'components/survey/Survey';
import HomePage from 'components/home/HomePage';
import { ComingSoon } from 'components/comingsoon/ComingSoon';
import { CaliforniaCollegeList } from './components/home/college/collegeList/CaliforniaCollegeList';
import Login from 'components/login/Login';
import { Register } from 'components/register/Register';
import { RentalManage } from 'components/rental/rental-manage/RentalManage';
import BookingManage from 'components/booking/booking-manage/BookingManage';

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
            <ToastContainer />
            <Header logout={this.logout} />
            <Route exact path='/' component={HomePage} />
            <div className='container'>
              <Switch>
                <Route exact path='/rentals' component={RentalListing} />
                <Route exact path='/rentals/:city/homes' component={RentalSearchListing} />
                <Route exact path='/contactUs' component={ContactUs} />
                <Route exact path='/survey' component={Survey} />
                <Route exact path='/aboutUs' component={AboutUs} />
                <ProtectedRoute exact path='/rentals/manage' component={RentalManage} />
                <ProtectedRoute exact path='/bookings/manage' component={BookingManage} />
                <ProtectedRoute exact path='/rentals/new' component={RentalCreate} />
                <Route exact path='/rentals/:id' component={RentalDetail} />
                <Route exact path='/login' component={Login} />
                <LoggedInRoute exact path='/register' component={Register} />
                <Route exact path='/comingsoon' component={ComingSoon} />
                <Route exact path='/college-lists' component={CaliforniaCollegeList} />
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
