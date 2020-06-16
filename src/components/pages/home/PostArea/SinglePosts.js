import React from 'react';

const SinglePosts = () => {
    return (
        <div>
            <div className="single-post-area mb-30">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6">
                        {/* <!-- Post Thumbnail --> */}
                        <div className="post-thumbnail">
                            <img src="img/bg-img/21.jpg" alt="" />

                            {/* <!-- Video Duration --> */}
                            <span className="video-duration">05.03</span>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        {/* <!-- Post Content --> */}
                        <div className="post-content mt-0">
                            <a href="#" className="post-cata cata-sm cata-success">Sports</a>
                            <a href="single-post.html" className="post-title mb-2">May fights on after Johnson savages Brexit approach</a>
                            <div className="post-meta d-flex align-items-center mb-2">
                                <a href="#" className="post-author">By Jane</a>
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <a href="#" className="post-date">Sep 08, 2018</a>
                            </div>
                            <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id tristique sit amet, rutrum non ligula.</p>
                            <div className="post-meta d-flex">
                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 32</a>
                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 42</a>
                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SinglePosts;