import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    {/* <!-- Footer Widget Area --> */}
                    <div className="col-12 col-sm-6 col-xl-3">
                        <div className="footer-widget mb-70">
                            {/* <!-- Logo --> */}
                            <a href="index.html" className="foo-logo d-block mb-4"><img src="img/core-img/logo2.png" alt="" /></a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                            {/* <!-- Footer Newsletter Area --> */}
                            <div className="footer-nl-area">
                                <form action="#" method="post">
                                    <input type="email" name="nl-email" className="form-control" id="nlEmail" placeholder="Your email" />
                                    <button type="submit"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Footer Widget Area --> */}
                    <div className="col-12 col-sm-6 col-xl-3">
                        <div className="footer-widget mb-70">
                            <h6 className="widget-title">Latest Twister</h6>
                            {/* <!-- Twitter Slides --> */}
                            <div className="twitter-slides owl-carousel">

                                {/* <!-- Single Twitter Slide --> */}
                                <div className="single--twitter-slide">
                                    {/* <!-- Single Twit --> */}
                                    <div className="single-twit">
                                        <p><i className="fa fa-twitter"></i> <span>@Leonard</span> I am so happy because I found this magazine, and it just made Vizeweasier. Thanks for sharing</p>
                                    </div>
                                    {/* <!-- Single Twit --> */}
                                    <div className="single-twit">
                                        <p><i className="fa fa-twitter"></i> <span>@Leonard</span> I am so happy because I found this magazine, and it just made Vizeweasier. Thanks for sharing</p>
                                    </div>
                                </div>

                                {/* <!-- Single Twitter Slide --> */}
                                <div className="single--twitter-slide">
                                    {/* <!-- Single Twit --> */}
                                    <div className="single-twit">
                                        <p><i className="fa fa-twitter"></i> <span>@Colorlib</span> I am so happy because I found this magazine, and it just made Vizeweasier. Thanks for sharing</p>
                                    </div>
                                    {/* <!-- Single Twit --> */}
                                    <div className="single-twit">
                                        <p><i className="fa fa-twitter"></i> <span>@Colorlib</span> I am so happy because I found this magazine, and it just made Vizeweasier. Thanks for sharing</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* <!-- Footer Widget Area --> */}
                    <div className="col-12 col-sm-6 col-xl-3">
                        <div className="footer-widget mb-70">
                            <h6 className="widget-title">Sport Videos</h6>

                            {/* <!-- Single Blog Post --> */}
                            <div className="single-blog-post d-flex">
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/1.jpg" alt="" />
                                </div>
                                <div className="post-content">
                                    <a href="single-post.html" className="post-title">DC Shoes: gymkhana the</a>
                                    <div className="post-meta d-flex justify-content-between">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 34</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 84</a>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Single Blog Post --> */}
                            <div className="single-blog-post d-flex">
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/2.jpg" alt="" />
                                </div>
                                <div className="post-content">
                                    <a href="single-post.html" className="post-title">Sweet Yummy Chocolatea Tea</a>
                                    <div className="post-meta d-flex justify-content-between">
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 34</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 84</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* <!-- Footer Widget Area --> */}
                    <div className="col-12 col-sm-6 col-xl-3">
                        <div className="footer-widget mb-70">
                            <h6 className="widget-title">Our Address</h6>
                            {/* <!-- Contact Address --> */}
                            <div className="contact-address">
                                <p>101 E 129th St, East Chicago, <br />IN 46312, US</p>
                                <p>Phone: 001-1234-88888</p>
                                <p>Email: info.colorlib@gmail.com</p>
                            </div>
                            {/* <!-- Footer Social Area --> */}
                            <div className="footer-social-area">
                                <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                                <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                                <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                                <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                                <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Copywrite Area --> */}
            <div className="copywrite-area">
                <div className="container">
                    <div className="row align-items-center">
                        {/* <!-- Copywrite Text --> */}
                        <div className="col-12 col-sm-6">
                            <p className="copywrite-text">
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                            </p>
                        </div>
                        <div className="col-12 col-sm-6">
                            <nav className="footer-nav">
                                <ul>
                                    <li><a href="#">Advertise</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Disclaimer</a></li>
                                    <li><a href="#">Privacy</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;