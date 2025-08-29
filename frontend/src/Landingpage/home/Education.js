import React from 'react';
function Education() {
    return ( 
        <div className='container'>
        <div className='row'>
            <div className='col-6'>
                <img src="assets/education.svg" style={{width:"70%"}} alt='study ones'></img>
            </div>
            <div className='col-6'>
                <h1  className='mb-3 fs-2' > Free and open market education</h1>
                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href='' className='mb-5' style={{textDecoration:'None'}}>Varsity<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
               <div className='col-2'></div>
                <p className='mt-5'> TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href='' className='mb-5' style={{textDecoration:'None'}}>TradingQ&a <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
               
            </div>

        </div>
       </div>
     );
}

export default Education;