import React from 'react';

const SocialBanner = () => {
    return (
        <div className="single-widget followers-widget mb-50">
            <a href="#" className="facebook"><i className="fa fa-facebook" aria-hidden="true"></i><span className="counter">198</span><span>Fan</span></a>
            <a href="#" className="twitter"><i className="fa fa-twitter" aria-hidden="true"></i><span className="counter">220</span><span>Followers</span></a>
            <a href="#" className="google"><i className="fa fa-google" aria-hidden="true"></i><span className="counter">140</span><span>Subscribe</span></a>
        </div>
    )
};

export default SocialBanner;