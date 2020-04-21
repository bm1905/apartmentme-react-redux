import React from 'react';
import LoaderImage from '../../images/loader.gif'

export const Loader = () => {
    return (
        <div className='loader'>
            <h1>Please wait...</h1>
            <img src={LoaderImage} />
        </div>
    )
}