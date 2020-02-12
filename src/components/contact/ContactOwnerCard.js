import React from 'react';

export class ContactOwnerCard extends React.Component {

  render() {

    return (
      <div className='booking'>
        <h3 className='booking-price'>Need more information.</h3>
        <hr></hr>
            <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' id='name' aria-describedby='emailHelp' placeholder=''></input>
                <label>Email</label>
                <input type='text' className='form-control' id='email' aria-describedby='emailHelp' placeholder=''></input>
                <label>Phone</label>
                <input type='text' className='form-control' id='phone' aria-describedby='emailHelp' placeholder=''></input>
                {/* <label>Description</label>
                <input type='text' className='form-control' id='description' aria-describedby='emailHelp' placeholder=''></input> */}
            </div>
        <button className='btn btn-bwm btn-confirm btn-block'>Email Owner</button>
        <hr></hr>
        <p className='booking-note-text'>
        By proceeding, you consent to receive calls and texts at the number you provided, including marketing by autodialer 
        and prerecorded and artificial voice, and email, from us.
        </p>
      </div>
    )
  }
}
