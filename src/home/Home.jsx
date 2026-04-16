import React from 'react';
import Banner from '../components/banner/Banner';
import MyFriends from '../components/banner/MyFriends';
import Stars from '../components/banner/Stars';

const Home = () => {
    return (
        <>
            <Banner/>
            <Stars/>
            <MyFriends/>
            
        </>
    );
};

export default Home;