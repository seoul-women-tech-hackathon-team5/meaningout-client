import React from 'react';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <MainContainer>
      MainPage
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw; /* 100% 화면 너비 */
  height: 100vh; /* 100% 화면 높이 */
  background-color: red;
  font-size: 24px; /* 텍스트 크기 */
  color: black; /* 텍스트 색상 */
`;

export default MainPage;
