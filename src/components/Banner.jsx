import React from 'react';

import BannerImg from '../assets/Rectangle 1.png';
const Banner = () => {
    return (
        <div className="hero   text-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={BannerImg}
                    className="max-w-lg h-auto rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Cox's bazar</h1>
                    <p className="py-6">
                    Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...
                    </p>
                    <button className="btn bg-buttonColor text-black">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;