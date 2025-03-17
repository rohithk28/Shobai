import React from 'react';

function Brokerage() {
    return (  
        <div className="container">
        <div className='row p-5 mt-5'>

        <div className='col-8 p-4 '>
            <h3 className='fs-5 text-center'><a href="" style={{textDecoration:"None"}}>Brokerage calculator</a></h3>
            <ul style={{textAlign:"Left",LineHeight:"1.8"}} className='text-muted'>
            <li>₹100 per order for futures and options.</li>
            <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
            <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
            <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
            </ul>
        </div>
        <div className='col-4 p-4 '>
            <h3 className='fs-5 text-center'><a href="" style={{textDecoration:"None"}}>List of charges</a></h3>
        </div>
        
        </div>
        </div>
    );
}

export default Brokerage;