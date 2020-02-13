import React from 'react';

export function TemporaryTemplate() {
    return (
        <div className='main-block'>
        <h6 className='main-title'>Shared House | 2,500 sq. ft.</h6>
        <h4 className='main-detail'>Pets: allowed | Parking: yes</h4>
        <p className='main-price'>$ 500/month</p>
        </div>
    )
}

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { rentalType, addComma, reservedParking, petsFriendly, insideLaundry } from 'helpers';

// export function TemporaryTemplate(props) {

//  function handleLogout() {
    
// }

//   const rental = props.rental;



//     return (
//         <div className='main-block'>
//           <Link className='rental-detail-link' to={`/rentals/${rental._id}`}>
//             <div className='card bwm-card'>
//               <img className='card-img-top' src={rental.image} alt={rental.title}></img>
//               { rentalType(rental.shared) === 'shared' &&  <p className='card-text-lg'>${rental.dailyRate} / day</p> }
//               { rentalType(rental.shared) === 'entire' &&  <p className='card-text-lg'>${rental.monthlyRate} / month</p> }
//               <div className='card-block'>
//                 {/* <h6 className={`card-subtitle ${rental.category}`}>{rentalType(rental.shared)} {rental.category} &#183; {rental.city}</h6> */}
//                 <h6 className={`card-subtitle ${rental.category}`}>{rentalType(rental.shared)} {rental.category} | {addComma(rental.area)} sq. feet</h6>
//                 <h6 className='card-text'>{rental.street}, {rental.zip}</h6>
//                 <h6 className='card-text'>Reserved Parking: {reservedParking(rental.parking)} | Pets Friendly: {petsFriendly(rental.pets)}</h6>
//                 <h6 className='card-text'>Laundry Room: {insideLaundry(rental.laundry)}</h6>
//                 {/* <h4 className='card-title'>{rental.title}</h4> */}
//                 {/* <p className='card-text'>${rental.dailyRate} per day &#183; Monthly plan available</p> */}
//                 {/* { rentalType(rental.shared) === 'shared' &&  <p className='card-text'>${rental.dailyRate} per day &#183; Monthly plan available</p> } */}
//                 {/* { rentalType(rental.shared) === 'entire' &&  <p className='card-text'>${rental.monthlyRate} per month &#183; Monthly plan available</p> } */}
                  
                  
//                   {/* ${rental.dailyRate} per day &#183; Monthly plan available</p> */}
//               </div>
//             </div>
//           </Link>
//         </div>
//     )
// }