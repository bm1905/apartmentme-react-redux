import React from 'react';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import Slider from 'react-slick';
import { MiddleHomeSection } from './MiddleHomeSection';


import * as actions from 'actions';

class HomePage extends React.Component {

    constructor() {
        super();

        this.searchInput = React.createRef();
        // this.handleSearch = this.handleSearch.bind(this)
    }

    componentWillMount() {
        this.props.dispatch(actions.fetchRentals());
    }


    

    handleSearch() {
        const { history } = this.props;
        const city = this.searchInput.current.value;

        city ? history.push(`/rentals/${city}/homes`) : history.push('/');
    }

    // handleKeyPress(target) {
    //     if(target.charCode==13) {
    //         // alert('Enter clicked!!!');  
    //         this.handleSearch();
    //     }
    // }

    onKeyPress = (e) => {
        if(e.which === 13) {
          this.handleSearch();
        }
      }
    

    render() {
        const rental = this.props.rentals;
        return (
        <div className='mainBody'>
            <div className='homeContainer'>
                <div className='videoSection'>
                    <header className='searchBoxHeader'>
                        <h1 className='headerText'>Find your way home</h1>
                    </header>
                    {/* <div className='searchInputAndButton'>
                        <input placeholder='Enter an address, neighborhood, city or ZIP code' className='searchInput' type='text' />
                        <button className='searchButton' type='submit'>
                            <h5 className='searchBtnText'>Search</h5>
                        </button>
                    </div> */}

                <div className="search-box">
                    <input ref={this.searchInput}
                        type="text" 
                        onKeyPress={this.onKeyPress}
                        name="" 
                        className="search-txt" 
                        placeholder="Enter an address, city or ZIP Code..."/>
                    <a onClick={() => {this.handleSearch()}} className="search-btn">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                </div>
                </div>
            </div> 
            <div className='featuredContainer'>
                <MiddleHomeSection rentals={this.props.rentals} />
            </div>      
        </div>  
        )
    }
}


//         <div className='form-inline my-2 my-lg-0'  id="search-size">
//             <input ref={this.searchInput}
//                 className='form-control mr-sm-2 bwm-search' 
//                 type='search' 
//                 placeholder="Search City" 
//                 aria-label='Search'></input>
//             <button onClick={() => {this.handleSearch()}}
//                 className='btn btn-outline-success my-2 my-sm-0 btn-bwm-search' 
//                 type='submit'>Search</button>
//         </div> 
//         )
//     }
// }

// export default withRouter(RentalSearchInput)

function mapStateToProps(state) {
    return {
        rentals: state.rentals.data
    }
}

export default connect(mapStateToProps)(HomePage)