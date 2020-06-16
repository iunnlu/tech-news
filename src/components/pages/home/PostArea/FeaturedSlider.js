import React from 'react';

const FeaturedSlider = () => {
    return (
        <div className="featured-post-slides owl-carousel mb-30">
            {/* <!-- Single Feature Post --> */}
            <div className="single-feature-post video-post bg-img" style={{ backgroundImage: "url(img/bg-img/14.jpg)" }}>
                {/* <!-- Play Button --> */}
                <a href="video-post.html" className="btn play-btn"><i className="fa fa-play" aria-hidden="true"></i></a>

                {/* <!-- Post Content --> */}
                <div className="post-content">
                    <a href="#" className="post-cata">Sports</a>
                    <a href="single-post.html" className="post-title">Reunification of migrant toddlers, parents should be completed Thursday</a>
                    <div className="post-meta d-flex">
                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 25</a>
                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 25</a>
                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 25</a>
                    </div>
                </div>
                {/* <!-- Video Duration --> */}
                <span className="video-duration">05.03</span>
            </div>

            {/* <!-- Single Feature Post --> */}
            <div className="single-feature-post video-post bg-img" style={{ backgroundImage: "url(img/bg-img/7.jpg)" }}>
                {/* <!-- Play Button --> */}
                <a href="video-post.html" className="btn play-btn"><i className="fa fa-play" aria-hidden="true"></i></a>

                {/* <!-- Post Content --> */}
                <div className="post-content">
                    <a href="#" className="post-cata">Sports</a>
                    <a href="single-post.html" className="post-title">Reunification of migrant toddlers, parents should be completed Thursday</a>
                    <div className="post-meta d-flex">
                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 25</a>
                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 25</a>
                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 25</a>
                    </div>
                </div>

                {/* <!-- Video Duration --> */}
                <span className="video-duration">05.03</span>
            </div>
        </div>
    )
};

export default FeaturedSlider;