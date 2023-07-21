import React, { useEffect } from 'react';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';


const OnboardingPage = () => {
    useEffect(() => {
        Swiper.use([Navigation, Pagination]);
        const swiper = new Swiper('.swiper-container', {
            speed: 500,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }, []);

    return (
        <div
            className="swiper-container"
            style={{
                width: '390px',
                height: '100vh',
                backgroundColor: '#E5E5E5',
            }}
        >
            <div className="swiper-wrapper">
                <div className="swiper-slide">Page 1</div>
                <div className="swiper-slide">Page 2</div>
                <div className="swiper-slide">Page 3</div>
            </div>

            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />

            <div className="swiper-pagination" />
        </div>
    );
};

export default OnboardingPage;
