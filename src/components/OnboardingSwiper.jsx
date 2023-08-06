import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import "../styles/swiper.css";

const SwiperContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: #558BCF;
    margin-bottom: 20px;
`

const Text = styled.div`
    font-size: 16px;
    color: #707070;
`

const SubTitle = styled.div`
    color: #558BCF;
    text-align: center;
    font-family: Noto Sans;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 10px;
`

const FinalSwiper = styled.div`
    background-color: white;
`

const T1 = styled.div`
    color: #558BCF;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const T2 = styled.div`
    color: #558BCF;
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export default function OnboardingSwiper() {
    const slides = [
        {
            img: '/assets/img/onboarding1.png',
            title: '우리 동네 착한 가게',
            text: `오자와 함께 우리 동네 착한 가게를 알아보세요`,
        },
        {
            img: '/assets/img/onboarding2.png',
            title: '추천 카드 만들기',
            text: `매장 이용 후 추천 카드를 만들어 보세요
함께 큐레이션을 완성하는 즐거움`,
        },
        {
            name: 'ozaoza',
            t1: '서울시와 함께하는',
            t2: ' 배려와 상생의 도시',
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
                        {slide.img && <img src={slide.img} alt={slide.text} />}
                        {slide.title && <Title>{slide.title}</Title>}
                        {slide.text === '시작하기' ? (
                            <FinalSwiper>
                                <SubTitle>{slide.name}</SubTitle>
                                <T1>{slide.t1}</T1>
                                <T2>{slide.t2}</T2>
                                <button onClick={handleStart}>{slide.text}</button>
                            </FinalSwiper>
                        ) : (
                            <>
                                <Text>{slide.text}</Text>
                            </>
                        )}
                    </SwiperContainer>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
