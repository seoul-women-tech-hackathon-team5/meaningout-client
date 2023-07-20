import React from 'react';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <MainContainer>
      <Content>MainPage</Content>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 844px;
  margin: 0 auto;
  background-color: red;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export default MainPage;
