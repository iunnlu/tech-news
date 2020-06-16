import React from 'react';

const Header = () => {
    return (
        <header className="header-area">
            {/* <!-- Top Header Area --> */}
            <div className="top-header-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            {/* <!-- Breaking News Widget --> */}
                            <div className="breaking-news-area d-flex align-items-center">
                                <div className="news-title">
                                    <p>Breaking News:</p>
                                </div>
                                <div id="breakingNewsTicker" className="ticker">
                                    <ul>
                                        <li><a href="single-post.html">10 Things Amazon Echo Can Do</a></li>
                                        <li><a href="single-post.html">Welcome to Colorlib Family.</a></li>
                                        <li><a href="single-post.html">Boys 'doing well' after Thai</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="top-meta-data d-flex align-items-center justify-content-end">
                                {/* <!-- Top Social Info --> */}
                                <div className="top-social-info">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-pinterest"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-youtube-play"></i></a>
                                </div>
                                {/* <!-- Top Search Area --> */}
                                <div className="top-search-area">
                                    <form action="index.html" method="post">
                                        <input type="search" name="top-search" id="topSearch" placeholder="Search..." />
                                        <button type="submit" className="btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                                    </form>
                                </div>
                                {/* <!-- Login --> */}
                                <a href="login.html" className="login-btn"><i className="fa fa-user" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Navbar Area --> */}
            <div className="vizew-main-menu" id="sticker">
                <div className="classy-nav-container breakpoint-off">
                    <div className="container">

                        {/* <!-- Menu --> */}
                        <nav className="classy-navbar justify-content-between" id="vizewNav">

                            {/* <!-- Nav brand --> */}
                            <a href="index.html" className="nav-brand"><img src="img/core-img/logo.png" alt="" /></a>

                            {/* <!-- Navbar Toggler --> */}
                            <div className="classy-navbar-toggler">
                                <span className="navbarToggler"><span></span><span></span><span></span></span>
                            </div>

                            <div className="classy-menu">

                                {/* <!-- Close Button --> */}
                                <div className="classycloseIcon">
                                    <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                                </div>

                                {/* <!-- Nav Start --> */}
                                <div className="classynav">
                                    <ul>
                                        <li className="active"><a href="index.html">Home</a></li>
                                        <li><a href="archive-list.html">Archives</a></li>
                                        <li><a href="#">Pages</a>
                                            <ul className="dropdown">
                                                <li><a href="index.html">- Home</a></li>
                                                <li><a href="archive-list.html">- Archive List</a></li>
                                                <li><a href="archive-grid.html">- Archive Grid</a></li>
                                                <li><a href="single-post.html">- Single Post</a></li>
                                                <li><a href="video-post.html">- Single Video Post</a></li>
                                                <li><a href="contact.html">- Contact</a></li>
                                                <li><a href="typography.html">- Typography</a></li>
                                                <li><a href="login.html">- Login</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Features</a>
                                            <div className="megamenu">
                                                <ul className="single-mega cn-col-4">
                                                    <li><a href="index.html">- Home</a></li>
                                                    <li><a href="archive-list.html">- Archive List</a></li>
                                                    <li><a href="archive-grid.html">- Archive Grid</a></li>
                                                    <li><a href="single-post.html">- Single Post</a></li>
                                                    <li><a href="video-post.html">- Single Video Post</a></li>
                                                    <li><a href="contact.html">- Contact</a></li>
                                                    <li><a href="typography.html">- Typography</a></li>
                                                    <li><a href="login.html">- Login</a></li>
                                                </ul>
                                                <ul className="single-mega cn-col-4">
                                                    <li><a href="index.html">- Home</a></li>
                                                    <li><a href="archive-list.html">- Archive List</a></li>
                                                    <li><a href="archive-grid.html">- Archive Grid</a></li>
                                                    <li><a href="single-post.html">- Single Post</a></li>
                                                    <li><a href="video-post.html">- Single Video Post</a></li>
                                                    <li><a href="contact.html">- Contact</a></li>
                                                    <li><a href="typography.html">- Typography</a></li>
                                                    <li><a href="login.html">- Login</a></li>
                                                </ul>
                                                <ul className="single-mega cn-col-4">
                                                    <li><a href="index.html">- Home</a></li>
                                                    <li><a href="archive-list.html">- Archive List</a></li>
                                                    <li><a href="archive-grid.html">- Archive Grid</a></li>
                                                    <li><a href="single-post.html">- Single Post</a></li>
                                                    <li><a href="video-post.html">- Single Video Post</a></li>
                                                    <li><a href="contact.html">- Contact</a></li>
                                                    <li><a href="typography.html">- Typography</a></li>
                                                    <li><a href="login.html">- Login</a></li>
                                                </ul>
                                                <ul className="single-mega cn-col-4">
                                                    <li><a href="index.html">- Home</a></li>
                                                    <li><a href="archive-list.html">- Archive List</a></li>
                                                    <li><a href="archive-grid.html">- Archive Grid</a></li>
                                                    <li><a href="single-post.html">- Single Post</a></li>
                                                    <li><a href="video-post.html">- Single Video Post</a></li>
                                                    <li><a href="contact.html">- Contact</a></li>
                                                    <li><a href="typography.html">- Typography</a></li>
                                                    <li><a href="login.html">- Login</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </div>
                                {/* <!-- Nav End --> */}
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;