import React from 'react';
import { Link } from 'react-router-dom';

export function Search() {
    return (
        // <nav className='navbar navbar-dark navbar-expand-lg'>
        //     <div className='container'>
        //         <form className='form-inline my-2 my-lg-0'>
        //             <input className='form-control mr-sm-2 bwm-search' type='search' placeholder="Search City" aria-label='Search'></input>
        //             <button className='btn btn-outline-success my-2 my-sm-0 btn-bwm-search' type='submit'>Search</button>
        //         </form>
        //     </div>
        // </nav>

        <div className="input-group md-form form-sm form-1 pl-0 size" id="search-size">
            <div className="input-group-prepend">
                <span className="input-group-text cyan lighten-2" id="basic-text1"><i className="fa fa-search text-white" aria-hidden="true"></i></span>
            </div>
            <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search"></input>
        </div>


    )
}