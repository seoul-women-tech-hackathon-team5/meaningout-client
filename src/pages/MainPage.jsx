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
  height: 100vh;
  background-color: red;
`;

const Content = styled.div`
  width: 100%;
  max-width: 844px;
  background-color: white;
`;

export default MainPage;
