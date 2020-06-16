import React from 'react';

const BlogPosts = () => {
    return (
        <div className="row">
            {/* <!-- Single Blog Post --> */}
            <div className="col-12 col-md-6">
                <div className="single-post-area mb-80">
                    {/* <!-- Post Thumbnail --> */}
                    <div className="post-thumbnail">
                        <img src="img/bg-img/12.jpg" alt="" />

                        {/* <!-- Video Duration --> */}
                        <span className="video-duration">05.03</span>
                    </div>

                    {/* <!-- Post Content --> */}
                    <div className="post-content">
                        <a href="#" className="post-cata cata-sm cata-danger">Game</a>
                        <a href="single-post.html" className="post-title">Searching for the 'angel' who held me on Westminste Bridge</a>
                        <div className="post-meta d-flex">
                            <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 28</a>
                            <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 17</a>
                            <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 22</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Single Blog Post --> */}
            <div className="col-12 col-md-6">
                <div className="single-post-area mb-80">
                    {/* <!-- Post Thumbnail --> */}
                    <div className="post-thumbnail">
                        <img src="img/bg-img/13.jpg" alt="" />

                        {/* <!-- Video Duration --> */}
                        <span className="video-duration">05.03</span>
                    </div>

                    {/* <!-- Post Content --> */}
                    <div className="post-content">
                        <a href="#" className="post-cata cata-sm cata-primary">Business</a>
                        <a href="single-post.html" className="post-title">Love Island star's boyfriend found dead after her funeral</a>
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

export default BlogPosts;