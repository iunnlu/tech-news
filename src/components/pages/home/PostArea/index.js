import React from 'react';
import FeaturedSlider from './FeaturedSlider';
import Header from './Header';
import BlogPosts from './BlogPosts';
import CategoryPost from './CategoryPost';
import SinglePosts from './SinglePosts';
import LatestVideo from './LatestVideo';
import SocialBanner from './SocialBanner';
import AdBanner from './AdBanner';
import Newsletter from './Newsletter';
import MostViewed from './MostViewed';

const PostArea = () => {
    return (
        <section className="vizew-post-area mb-50">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-7 col-lg-8">
                        <div className="all-posts-area">
                            <Header />
                            <FeaturedSlider />
                            <BlogPosts />
                            <div className="row">
                                <CategoryPost title="Sport" />
                                <CategoryPost title="Business" />
                            </div>
                            <SinglePosts />
                        </div>
                    </div>
                    <div className="col-12 col-md-5 col-lg-4">
                        <div className="sidebar-area">
                            <SocialBanner />
                            <LatestVideo />
                            <AdBanner />
                            <Newsletter />
                            <MostViewed />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default PostArea;