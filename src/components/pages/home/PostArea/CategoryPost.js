import React from 'react';

const CategoryPost = ({title, data}) => {
    return (
        <div className="col-12 col-lg-6">
            {/* <!-- Section Heading --> */}
            <div className="section-heading style-2">
                <h4>{title}</h4>
                <div className="line"></div>
            </div>

            {/* <!-- Sports Video Slides --> */}
            <div className="sport-video-slides owl-carousel mb-50">
                {/* <!-- Single Blog Post --> */}
                <div className="single-post-area">
                    {/* <!-- Post Thumbnail --> */}
                    <div className="post-thumbnail">
                        <img src="img/bg-img/15.jpg" alt="" />

                        {/* <!-- Video Duration --> */}
                        <span className="video-duration">05.03</span>
                    </div>

                    {/* <!-- Post Content --> */}
                    <div className="post-content">
                        <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                        <a href="single-post.html" className="post-title">Searching for the 'angel' who held me on Westminster Bridge</a>
                        <div className="post-meta d-flex">
                            <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                            <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 38</a>
                            <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                        </div>
                    </div>
                </div>

                {/* <!-- Single Blog Post --> */}
                <div className="single-post-area">
                    {/* <!-- Post Thumbnail --> */}
                    <div className="post-thumbnail">
                        <img src="img/bg-img/13.jpg" alt="" />

                        {/* <!-- Video Duration --> */}
                        <span className="video-duration">05.03</span>
                    </div>

                    {/* <!-- Post Content --> */}
                    <div className="post-content">
                        <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                        <a href="single-post.html" className="post-title">Searching for the 'angel' who held me on Westminster Bridge</a>
                        <div className="post-meta d-flex">
                            <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                            <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 38</a>
                            <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CategoryPost;