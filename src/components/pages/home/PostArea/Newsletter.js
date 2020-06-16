import React from 'react';

const Newsletter = () => {
    return (
        <div className="single-widget newsletter-widget mb-50">
            {/* <!-- Section Heading --> */}
            <div className="section-heading style-2 mb-30">
                <h4>Newsletter</h4>
                <div className="line"></div>
            </div>
            <p>Subscribe our newsletter gor get notification about new updates, information discount, etc.</p>
            {/* <!-- Newsletter Form --> */}
            <div className="newsletter-form">
                <form action="#" method="post">
                    <input type="email" name="nl-email" className="form-control mb-15" id="emailnl" placeholder="Enter your email" />
                    <button type="submit" className="btn vizew-btn w-100">Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default Newsletter;