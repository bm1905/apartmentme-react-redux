import React from 'react';
import { withRouter } from 'react-router-dom';

import { toUpperCase } from '../../helpers';

class RentalSearchInput extends React.Component {

    constructor(props) {
        super(props);

        const { searchedCity } = props;

        this.searchInput = React.createRef();

        this.state = {
            initialCity: searchedCity
        }
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.handleSearch();
        }
    }

    handleSearch() {
        const { history } = this.props;
        const city = this.searchInput.current.value;

        city ? history.push(`/rentals/${city}/homes`) : history.push('/');


    }

    render() {
        return (
            // <div className="input-group md-form form-sm form-1 pl-0 size" id="search-size">
            //     <div className="input-group-prepend">
            //         <span className="input-group-text cyan lighten-2" id="basic-text1"><i className="fa fa-search text-white" aria-hidden="true"></i></span>
            //     </div>
            //     <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search"></input>
            // </div>

            <div className='form-inline my-2 my-lg-0' id="search-size">
                <input
                    onKeyPress={(event) => { this.handleKeyPress(event) }}
                    onChange={e => this.setState({ initialCity: e.target.value })}
                    ref={this.searchInput}
                    className='form-control mr-sm-2 bwm-search'
                    type='search'
                    placeholder='City name..'
                    value={toUpperCase(this.state.initialCity)}
                    aria-label='Search'
                />
                <select className='form-control mr-sm-2 bwm-search'>
                    <option value="entire">Apartment</option>
                    <option value="shared">Single Room</option>
                    <option value="entire">House</option>
                    <option selected value="both">Category</option>
                </select>
                <select className='form-control mr-sm-2 bwm-search'>
                    <p>Hi</p>
                    <option value="entire">Schools</option>
                    <option value="shared">Markets</option>
                    <option value="entire">Entertainment</option>
                    <option selected value="both">Nearby Places</option>
                </select>
                <button onClick={() => { this.handleSearch() }}
                    className='btn btn-outline-success my-2 my-sm-0 btn-bwm-search'
                    type='submit'>Search</button>
            </div>
        )
    }
}

export default withRouter(RentalSearchInput)