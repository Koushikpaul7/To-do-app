import React from 'react';

const Footer = () => {
    const currentYear = (new Date().getFullYear())
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear
    return (
        <div className='container-fluid bg-dark'>
            <div class="row">
      <div class="col-md-12 text-center p-5 text-white">
         
          <h1  class="headline text-warning pt-5">To-do App</h1>
          
         
           
          
      </div>
      
     
      
      
  </div>
  <div className="text-center text-white">
  © { yearTxt } To-do App Developed by Company
  </div>
        </div>
    );
};

export default Footer;