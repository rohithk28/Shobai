import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src="assets/homeHero.png" alt='basecase idenity' className='mb-5'></img>
                <h1>Invest In Everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary fs-5'style={{width:"20%",margin:'0 auto'}}>SignUp now</button>
            </div>
            
        </div>
     );
}

export default Hero;
