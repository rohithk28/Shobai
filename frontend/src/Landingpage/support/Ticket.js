import React from 'react';

function Ticket() {
    return ( 
        <div className='container'>
            <div className="row p-5 mt-5 mb-5">
                <h1 className="fs-4 "> To create a ticket, select a relevant topic </h1>
           
            <div className="col-4 p-5 mt-5 mb-5">
                <h4> <i class="fa fa-plus-circle" aria-hidden="true"></i>Account Opening</h4>

                <a href="" style={{textDecoration:"None"}}>Getting started <br/></a>
                <a href="" style={{textDecoration:"None"}}>Online  <br/></a>
                <a href="" style={{textDecoration:"None"}}>Offline  <br/></a>
                <a href=""style={{textDecoration:"None"}}>Charges  <br/></a>
                <a href=""style={{textDecoration:"None"}}>Company, Partnership and HUF  <br/></a>
                <a href=""style={{textDecoration:"None"}}>Non Resident Indian (NRI) <br/> </a>          
            </div>
            <div className="col-4 p-5 mt-5 mb-5">
                <h4> <i class="fa fa-user" aria-hidden="true"></i>Your zeroda account</h4>
                <a href="" style={{textDecoration:"None"}}>Login credentials <br/></a>
                <a href="" style={{textDecoration:"None"}}>Your Profile  <br/></a>
                <a href="" style={{textDecoration:"None"}}> Account modification and segment addition <br/></a>
                <a href=""style={{textDecoration:"None"}}>CMR & DP ID <br/></a>
                <a href=""style={{textDecoration:"None"}}>Nomination <br/></a>
                <a href=""style={{textDecoration:"None"}}>Transfer and conversion of shares<br/> </a>
            </div>
            <div className="col-4 p-5 mt-5 mb-5">
                <h4> <i class="fa fa-bar-chart" aria-hidden="true"></i>Trading and Markets</h4>
                <a href="" style={{textDecoration:"None"}}>Trading FAQs <br/></a>
                <a href="" style={{textDecoration:"None"}}>Kite <br/></a>
                <a href="" style={{textDecoration:"None"}}> Margins <br/></a>
                <a href=""style={{textDecoration:"None"}}>Product and order types<br/></a>
                <a href=""style={{textDecoration:"None"}}>Corporate actions<br/></a>
                <a href=""style={{textDecoration:"None"}}>Kite features<br/> </a>
                
            </div>
        </div>
        </div>
     );
}

export default Ticket;
