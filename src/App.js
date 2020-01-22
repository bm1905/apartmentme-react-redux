import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import { Provider } from 'react-redux';

import { Header } from 'shared/Header';
import RentalListing from 'components/rental/rental-listing/RentalListing';
import RentalDetail from 'components/rental/rental-detail/RentalDetail';

import { init } from './reducers';

// import logo from './logo.svg';
import 'App.css';

const store = init();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <div className='container'>
              <Route exact path="/rentals" component={RentalListing} />
              <Route exact path="/rentals/:id" component={RentalDetail} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
