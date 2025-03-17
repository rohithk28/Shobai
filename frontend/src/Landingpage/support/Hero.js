import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid" id="backgroundhero">
            <div className="p-5 mt-5 mb-5" id="supportWrapper">
                <h4>Support portal</h4>
                <a href="">Track Tickets</a>
           
        </div>
        <div className="row p-5">
        <div className=" col">
                <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
                <input placeholder ="Eg.how do  i activate F&O, why is my order getting rejected..."/>
                <a href="">Track account opening</a>
                <a href="">Track segment activation</a>
                <a href="">Intraday margins</a>
                <a href="">Kite user manual</a>
        </div>
        <div className="col-6 p-5">
                <h1 className="fs-3">Featured</h1>
                <ol>
                    <li>
                    <a href="">1. Trading holiday on account of Maha Shivaratri on February 26, 2025</a>
                    </li>
                    <li>
                    <a href="">2. Offer for sale (OFS) - February 2025</a>
                    </li>
                </ol>
        </div>
        </div>
        </section>
     );
}

export default Hero;