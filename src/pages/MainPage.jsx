import React from 'react';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <PageWrapper>
      <RedScreen>
        MainPage
      </RedScreen>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

const RedScreen = styled.div`
  width: 390px;
  height: 844px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: black;
`;

export default MainPage;
