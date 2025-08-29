import React from 'react';

function Create() {
    return ( 
        <div className='container'>
            <div className="row p-5 mt-5 mb-5">
                <div className='col'>
                    <img src='assets\account_open.svg' alt='assets account opening ' />
                </div>
                <div className='col'>
                    <h2 >SignUp Now</h2>
                    <p >Or track your existing application</p>
                    <div  className='open_account_form mb-3' style={{maxWidth:"400px"}}>
                    <div className='input-class '>
                        <span 
                        style={{
      backgroundColor: "#fff",
      borderRight: "1px solid #ccc",
      display: "flex",
      alignItems: "center",
      gap: "2px",
      fontWeight: "500",
    }}><img style={{width:"24px", height:"16px"}} src='assets/india-flag.svg' alt="flag" /> +91        </span>
                         <input className="mb-2 form-control"type='tel' placeholder='enter your mobile number' style={{height:"50px", fontSize:"16px"}} pattern='[0-9]' maxLength={10} required></input>
                 
                    </div>
                    <div className='btn'>
                    <button type='submit' className='btn btn-primary mb-15 ' style={{height:"50px", fontWeight:"500", padding:"0 20px"}}>Get OTP</button>
                    </div>
                    </div>
                    <p className='fs-12' >By providing you agree to the zerodha <a href='terms' style={{textDecoration:"none"}}>terms</a> and <a href='conditions' style={{textDecoration:"none"}}>conditions</a></p>
                </div>

            </div>
        </div>
        
     );
}

export default Create;
