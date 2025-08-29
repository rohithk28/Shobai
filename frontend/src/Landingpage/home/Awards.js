import React from 'react';

function Awards() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src="assets/largestBroker.svg" alt='broking space'></img>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p>
                        2+Million use zerodha every day
                    </p>
                    <div className='row'>
                        <div className='col-6'>
                        <ul>
                        <li>
                            <p>Futures and options</p>
                        </li>
                        <li>
                            <p>commodity derivatives</p>
                        </li>
                        <li>
                            <p>Currency and derivatives</p>
                        </li>
                    </ul>
                        </div>
                        <div className='col-6 mb-5'>
                        <ul>
                        <li>
                            <p>Stocks and Ipo's</p>
                        </li>
                        <li>
                            <p>Direct mutual funds</p>
                        </li>
                        <li>
                            <p>Government bonds</p>
                        </li>
                    </ul>
                        </div>
                    </div>
                    <img src="assets/pressLogos.png" style={{width:"90%"}}></img>
                </div>

            </div>

        </div>
     );
}

export default Awards;