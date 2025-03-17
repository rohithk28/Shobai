import React from 'react';
function LeftImage({imageURL,productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return <div className="container">
        <div className="row">
            <div className='col-6 p-3'>
                <img src={imageURL}></img>
            </div>
            <div className='col-6 p-5 mt-5'>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div>
                <a href={tryDemo} style={{textDecoration:"None", marginRight:"50px"} }>Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <a href={learnMore} style={{textDecoration:"None"}}>LearnMore <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='mt-3'>
                <a href={googlePlay}><img src="assets/googlePlayBadge.svg"></img></a>
                <a href={appStore} style={{marginLeft:"50px"}}><img src="assets/appstoreBadge.svg"></img></a>
                </div>
            </div>
        </div>
    </div>
}

export default LeftImage
