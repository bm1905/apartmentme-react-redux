import React from 'react';
import { Redirect } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import Slider from 'react-slick';

export class ComingSoon extends React.Component {

    calculateTime() {
        var countDownDate = new Date("Mar 5, 2020 15:37:25").getTime();
         
         // Update the count down every second.
         var countdownfunction = setInterval(function() {
         
           // Get current date.
           var now = new Date().getTime();
           
           // Find the distance between current and final time.
           var distance = countDownDate - now;
           
           // Time calculations for days, hours, minutes and seconds
           var days = Math.floor(distance / (1000 * 60 * 60 * 24));
           var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
           var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
           var seconds = Math.floor((distance % (1000 * 60)) / 1000);
           
           // Output the result in an element.
           document.getElementById("result").innerHTML = days + "d " + hours + "h "
           + minutes + "m " + seconds + "s ";
           
           // If the count down is over, write some text 
           if (distance < 0) {
             clearInterval(countdownfunction);
             document.getElementById("result").innerHTML = "EXPIRED";
           }
         }, 1000);
    }

    render() {
        return (
            <div className="bgimg">
               <div className="middle">
                  <h1>Work in progress!</h1>
                  <hr></hr>
                  <h3 className="testTime">Estimated completion by:</h3>
                  {this.calculateTime()}
                  <p id="result"></p>
               </div>
               <div className="bottom">
                <a href="/"><button className='btn btn-success'> Go to home page </button></a>
                  {/* <p><a href="home_page.html">Go to home page.</a></p> */}
               </div>
            </div>

        )
    }
}