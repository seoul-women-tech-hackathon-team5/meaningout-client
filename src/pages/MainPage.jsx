import React from 'react';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <PageWrapper>
      <RedScreen>
        <LogoText>LOGO</LogoText> 
        MainPage
        <Menu>
          <MenuButton>HOME</MenuButton>
          <MenuButton>MAKE CARD</MenuButton>
          <MenuButton>MY PAGE</MenuButton>
        </Menu>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 390px;
  height: 844px;
  background-color: red;
  position: relative; 
`;

const LogoText = styled.div`
  position: absolute;
  top: 47px; 
  left: 18px; 
  color: black;
  font-size: 20px; 
  font-weight: bold;
`;

const Menu = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: blue;
  position: absolute; 
  bottom: 0; 
`;

const MenuButton = styled.button`
  width: 120px;
  height: 50px;
  background-color: blue;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export default MainPage;
