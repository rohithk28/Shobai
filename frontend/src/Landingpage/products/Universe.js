import React from 'react';

function Universe() {
    return ( 
        <div className="container mt-5">
        <div className="row text-center">
            <h1 className=' text-muted'>The Zerodha Universe</h1>
            <p >Extend your trading and investment experience even further with our partner platforms</p>

            <div className="col-4 p-3 mt-5" >
                <img src="assets/zerodhaFundhouse.png" style={{width:"50%"}}/>
                <p className='text-small text-muted'>Asset management</p>

            </div> 
            <div className="col-4 p-3 mt-5">
            <img src="assets/sensibullLogo.svg"/>
                <p className='text-small text-muted'>option trading platform</p>
            
            </div> 
            <div className="col-4 p-3 mt-5">
            <img src="assets/goldenpiLogo.png"/>
                <p className='text-small text-muted '>Bonds Trading platform</p>  
            </div> 
            <div className="col-4 p-3 mt-5">
                <img src="assets/smallcaseLogo.png"/>
                <p className='text-small text-muted'>Thematic Investment platform</p>

            </div> 
            <div className="col-4 p-3 mt-5">
            <img src="assets/streakLogo.png" style={{width:"20%"}}/>
                <p className='text-small text-muted'>Algo & strategy platform</p>
            
            </div> 
            <div className="col-4 p-3 mt-5">
            <img src="assets/dittoLogo.png" style={{width:"20%"}}/>
                <p className='text-small text-muted '>Insurance</p>  
            </div> 

            <div>
                <button className=' text-center p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>SignUp</button>
            </div>
           
        </div>
    </div>
     );
}

export default Universe;
<h1>Universe</h1>