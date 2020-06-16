import React from 'react';

const Slider = () => {
    const data = [
        { id: 1, title: "Boys 'doing well' after Thai cave rescue", image: "img/bg-img/7.jpg", tag: "sports", comment: 25, review: 100, like: 25, duration: "05.03" },
        { id: 2, title: "Meet the 12 boys rescued from cave", image: "img/bg-img/8.jpg", tag: "art", comment: 12, review: 123, like: 12, duration: "15.03" },
        { id: 3, title: "Pogba dedicates France win to Thai cave boys", image: "img/bg-img/9.jpg", tag: "sports", comment: 233, review: 1231, like: 23, duration: "25.03" },
        { id: 4, title: "Boys 'doing well' after Thai cave rescue", image: "img/bg-img/10.jpg", tag: "sports", comment: 25, review: 100, like: 25, duration: "05.03" },
        { id: 5, title: "Meet the 12 boys rescued from cave", image: "img/bg-img/7.jpg", tag: "art", comment: 12, review: 123, like: 12, duration: "15.03" },
        { id: 6, title: "Pogba dedicates France win to Thai cave boys", image: "img/bg-img/8.jpg", tag: "sports", comment: 233, review: 1231, like: 23, duration: "25.03" }
    ];

    const tabContentRender = () => {
        return data.map((item, index) => {
            return (
                <div key={item.id} className={`tab-pane fade show ${index == 0 ? "active" : ""}`} id={`post-${item.id}`} role="tabpanel" aria-labelledby={`post-${item.id}-tab`}>
                    <div className="single-feature-post video-post bg-img" style={{ backgroundImage: `url(${item.image})` }}>
                        <a href="video-post.html" className="btn play-btn"><i className="fa fa-play" aria-hidden="true"></i></a>
                        <div className="post-content">
                            <a href="#" className="post-cata">{item.tag}</a>
                            <a href="single-post.html" className="post-title">{item.title}</a>
                            <div className="post-meta d-flex">
                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> {item.comment}</a>
                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> {item.review}</a>
                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> {item.like}</a>
                            </div>
                        </div>
                        <span className="video-duration">{item.duration}</span>
                    </div>
                </div>
            )
        });
    }

    const tabListRender = () => {
        return data.map((item, index) => {
            console.log("Index : " + index)
            return (
                <li key={item.id} className="nav-item">
                    <a className={`nav-link ${index == 0 ? "active" : ""}`} id={`post-${item.id}-tab`} data-toggle="pill" href={`#post-${item.id}`} role="tab" aria-controls={`post-${item.id}`} aria-selected={`${index == 0 ? true : false}`}>
                        {/* <!-- Single Blog Post --> */}
                        <div className="single-blog-post style-2 d-flex align-items-center">
                            <div className="post-thumbnail">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="post-content">
                                <h6 className="post-title">{item.title}</h6>
                                <div className="post-meta d-flex justify-content-between">
                                    <span><i className="fa fa-comments-o" aria-hidden="true"></i> {item.comment}</span>
                                    <span><i className="fa fa-eye" aria-hidden="true"></i> {item.review}</span>
                                    <span><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> {item.like}</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            )
        })
    }
    return (
        <section className="hero--area section-padding-80">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-12 col-md-7 col-lg-8">
                        <div className="tab-content">
                            {tabContentRender()}
                        </div>
                    </div>

                    <div className="col-12 col-md-5 col-lg-4">
                        <ul className="nav vizew-nav-tab" role="tablist">
                            {tabListRender()}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider;