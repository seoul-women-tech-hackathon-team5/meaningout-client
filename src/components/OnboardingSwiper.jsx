import { Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import "../styles/swiper.css";

const SwiperContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default function OnboardingSwiper () {
    const slides = [
        {
            img: '/assets/img/temporary-img.svg',
            title: '우리 동네 선한 가게를 찾아봐요',
            text: `우리 동네 선한 가게를 이용하셨나요?
            오자와 함께 우리 동네 선한 가게를 알아봐요`,
        },
        {
            img: '/assets/img/temporary-img.svg',
            title: '선한 가게 추천 카드를 만들어 봐요',
            text: `매장 이용 후 선한 가게 추천 카드를 만들어 보세요
            당신의 카드로 큐레이션을 완성하는 즐거움`,
        },
        {
            img: '/assets/img/temporary-img.svg',
            text: `시작하기`,
        },
    ];

    const [initialSlide, setInitialSlide] = useState();
    const navigate = useNavigate();

    // 첫방문 유저 캐러셀 상태 제어
    useEffect(() => {
        localStorage.getItem('isFirstVisitor') ? setInitialSlide(3) : setInitialSlide(0);
    }, []);
    
    const handleStart = () => {
        localStorage.setItem('isFirstVisitor', 'true');
        navigate('/main', { state: {} });
    };

    // 초기 슬라이드가 설정되기 전에는 캐러셀이나 다른 컨텐츠 렌더링 방지
    if (initialSlide === null) {
        return null;
    }

    return (
        <Swiper
            initialSlide={initialSlide}
            modules={[Pagination]}
            spaceBetween={0}
            pagination={{
                clickable: true,
            }}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <SwiperContainer>
                        <img src={slide.img} alt={slide.text} />
                        {slide.title}
                        {slide.text === '시작하기' ? (
                            <button onClick={handleStart}>{slide.text}</button>
                        ) : (
                            slide.text
                        )}
                    </SwiperContainer>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
