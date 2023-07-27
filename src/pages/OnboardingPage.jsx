import styled from 'styled-components';
import OnboardingSwiper from '../components/OnboardingSwiper';

const StyledOnboarding = styled.div`
    width: 390px;
    height: 100vh;
    background-color: red;
`

const OnboardingPage = () => {
    return (
        <StyledOnboarding>
            <OnboardingSwiper/>
        </StyledOnboarding>
    );
}

export default OnboardingPage;


// import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
// import styled from 'styled-components';
// import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/swiper-bundle.css';
// import { Link, useNavigate } from 'react-router-dom';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 390px;
//   height: 100vh;
//   background-color: #F7F7F7;
//   padding: 20px;
// `;

// const Slide = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 300px;
//   padding: 55px;
// `;

// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: bold;
//   margin-bottom: 20px;
//   color: #02B2B2;
// `;

// const Content = styled.div`
//   font-size: 16px;
//   text-align: left;
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 20px;
// `;

// const LoginButton = styled.button`
//   background-color: #02B2B2;
//   color: #FFFFFF;
//   font-size: 18px;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   width: 250px;
//   margin-top: 300px;
//   margin-bottom: 10px; 
// `;

// const StartButton = styled.button`
//   background-color: #02B2B2;
//   color: #FFFFFF;
//   font-size: 18px;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   width: 250px;
// `;

// const CustomPagination = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 20px;

//   .swiper-pagination-bullet {
//     width: 8px;
//     height: 8px;
//     background-color: #D9D9D9;
//     opacity: 0.8;
//     border-radius: 50%;
//     margin: 0 5px;
//     cursor: pointer;
//   }

//   .swiper-pagination-bullet-active {
//     background-color: #02B2B2;
//     opacity: 1;
//   }
// `;

// const CustomNavigation = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: 20px;

//   .swiper-button-next, .swiper-button-prev {
//     background-color: #F7F7F7;
//     color: #F7F7F7;
//     font-size: 24px;
//     padding: 8px 16px;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//   }

//   .swiper-button-disabled {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }
// `;

// const OnboardingPage = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     Swiper.use([Navigation, Pagination]);
//     const swiper = new Swiper('.swiper-container', {
//       speed: 500,
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//     });
//     const hasVisited = localStorage.getItem('visited');
//     if (hasVisited) {
//       swiper.slideTo(2, 0);
//     }
//   }, []);

//   const handleStartButtonClick = () => {
//     // 첫 방문 시 로컬 스토리지에 방문 여부 저장
//     localStorage.setItem('visited', 'true');
//     navigate('/main');
//   };

  

//   return (
//     <Container className="swiper-container">
//       <div className="swiper-wrapper">
//         <Slide className="swiper-slide">
//           <Title>우리 동네 매장</Title>
//           <Content>
//             우리 동네에 있는 착한 매장을 찾아보세요
//           </Content>
//         </Slide>
//         <Slide className="swiper-slide">
//           <Title>추천 카드 만들기</Title>
//           <Content>
//             착한 매장을 이용하셨다면 <br />나만의 추천카드를 만들어보세요
//           </Content>
//         </Slide>
//         <Slide className="swiper-slide">
//           <Title>모바일 쿠폰 사용</Title>
//           <Content>
//             8장의 카드를 제작하면 쿠폰이 발행됩니다 
//             <ButtonContainer>
//               <LoginButton>로그인</LoginButton>
//               <Link to="/main">
//                 <StartButton onClick={handleStartButtonClick}>시작하기</StartButton>
//               </Link>
//             </ButtonContainer>
//           </Content>
//         </Slide>
//       </div>

//       <CustomPagination className="swiper-pagination" />


//       <CustomNavigation>
//         <div className="swiper-button-prev"></div>
//         <div className="swiper-button-next"></div>
//       </CustomNavigation>
//     </Container>
//   );
// };

// export default OnboardingPage;