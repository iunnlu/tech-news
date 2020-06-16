import React from 'react';

const LatestVideo = () => {
    return (
        <div className="single-widget latest-video-widget mb-50" >
            {/* <!-- Section Heading --> */}
            <div className="section-heading style-2 mb-30" >
                <h4>Latest Video</h4>
                <div className="line"></div>
            </div >

            {/* <!-- Single Blog Post --> */}
            <div className="single-post-area mb-30" >
                {/* <!-- Post Thumbnail --> */}
                <div className="post-thumbnail" >
                    <img src="img/bg-img/13.jpg" alt="" />

                    {/* <!-- Video Duration --> */}
                    <span className="video-duration">05.03</span>
                </div>

                {/* <!-- Post Content --> */}
                <div className="post-content" >
                    <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                    <a href="single-post.html" className="post-title">Full article Prince Charles's 'urgent' global research</a>
                    <div className="post-meta d-flex">
                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 38</a>
                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                    </div>
                </div>
            </div >

            {/* <!-- Single Blog Post --> */}
            <div className="single-blog-post d-flex" >
                <div className="post-thumbnail">
                    <img src="img/bg-img/1.jpg" alt="" />
                </div>
                <div className="post-content">
                    <a href="single-post.html" className="post-title">DC Shoes: gymkhana five; the making of</a>
                    <div className="post-meta d-flex justify-content-between">
                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 29</a>
                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 08</a>
                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 23</a>
                    </div>
                </div>
            </div>

            {/* <!-- Single Blog Post --> */}
            <div className="single-blog-post d-flex" >
                <div className="post-thumbnail">
                    <img src="img/bg-img/2.jpg" alt="" />
                </div>
                <div className="post-content">
                    <a href="single-post.html" className="post-title">Sweet Yummy Chocolatea Tea</a>
                    <div className="post-meta d-flex justify-content-between">
                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 17</a>
                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 33</a>
                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 26</a>
                    </div>
                </div>
            </div>

            {/* <!-- Single Blog Post --> */}
            <div className="single-blog-post d-flex" >
                <div className="post-thumbnail">
                    <img src="img/bg-img/35.jpg" alt="" />
                </div>
                <div className="post-content">
                    <a href="single-post.html" className="post-title">How To Make Orange Chicken Recipe?</a>
                    <div className="post-meta d-flex justify-content-between">
                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 11</a>
                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 21</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LatestVideo;