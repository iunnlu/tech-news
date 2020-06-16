import React from 'react';
import Slider from './Slider';
import TrendingPosts from './TrendingPosts';
import PostArea from './PostArea';

const Home = () => {
    return(
        <>
            <Slider />
            <TrendingPosts />
            <PostArea />
        </>
    )
}

export default Home;