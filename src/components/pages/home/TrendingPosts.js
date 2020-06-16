import React from 'react';

const TrendingPosts = () => {
    const data = [
        { id: 1, title: "Boys 'doing well' after Thai cave rescue", image: "img/bg-img/7.jpg", tag: "sports", comment: 25, review: 100, like: 25, duration: "05.03" },
        { id: 2, title: "Meet the 12 boys rescued from cave", image: "img/bg-img/8.jpg", tag: "art", comment: 12, review: 123, like: 12, duration: "15.03" },
        { id: 3, title: "Pogba dedicates France win to Thai cave boys", image: "img/bg-img/9.jpg", tag: "sports", comment: 233, review: 1231, like: 23, duration: "25.03" }
    ];

    const renderContent = () => {
        return data.map((item, index) => {
            return (
                <div key={item.id} className="col-12 col-md-4">
                    <div className="single-post-area mb-80">
                        <div className="post-thumbnail">
                            <img src={item.image} alt="" />
                            <span className="video-duration">{item.duration}</span>
                        </div>
                        <div className="post-content">
                            <a href="#" className="post-cata cata-sm cata-success">{item.tag}</a>
                            <a href="single-post.html" className="post-title">{item.title}</a>
                            <div className="post-meta d-flex">
                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> {item.comment}</a>
                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> {item.review}</a>
                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> {item.like}</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <section className="trending-posts-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading">
                            <h4>Trending Videos</h4>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {renderContent()}
                </div> 
            </div>
        </section>
    )
}

export default TrendingPosts;