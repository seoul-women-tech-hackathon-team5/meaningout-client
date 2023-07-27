import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const MainPage = () => {
  const redScreenRef = useRef(null);
  const [cards, setCards] = useState(generateRandomCards(10));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchMoreData = () => {
    setCards((prevCards) => [...prevCards, ...generateRandomCards(10)]);
  };

  const handleScroll = () => {
    const redScreen = redScreenRef.current;
    if (
      redScreen.scrollTop + redScreen.clientHeight >=
      redScreen.scrollHeight - 10
    ) {
      fetchMoreData();
    }
  };

  const handleYellowRectangleClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <PageWrapper>
      <RedScreen ref={redScreenRef} onScroll={handleScroll}>
        <LogoContainer>
          <LogoText>LOGO</LogoText>
        </LogoContainer>
        <YellowRectangleContainer>
          <YellowRectangle onClick={handleYellowRectangleClick} />
        </YellowRectangleContainer>
        <CardContainer>
          {cards.map((card, index) => (
            <Card key={index} style={{ backgroundColor: card.color }} />
          ))}
        </CardContainer>
        <Menu>
          <MenuButton>카드 제작</MenuButton>
          <MenuButton>홈</MenuButton>
          <MenuButton>마이 페이지</MenuButton>
        </Menu>
        {isModalOpen && <Modal onClose={closeModal} />}
      </RedScreen>
    </PageWrapper>
  );
};

const generateRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

const generateRandomCards = (count) => {
  const cards = [];
  for (let i = 0; i < count; i++) {
    cards.push({ color: generateRandomColor() });
  }
  return cards;
};

const Card = styled.div`
  width: 300px;
  height: 500px;
  margin: 8px;
  margin-top: 20px;
  border-radius: 8px;
`;

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
  height: 100vh;
  background-color: red;
  position: relative;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  background-color: red;
  z-index: 2;
`;

const LogoText = styled.div`
  color: black;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transform: translateY(100px);
`;

const YellowRectangleContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 40px;
  z-index: 2;
`;

const YellowRectangle = styled.div`
  width: 360px;
  height: 40px;
  background-color: yellow;
  margin: 8px;
  border-radius: 8px;
  cursor: pointer;
  position: fixed;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: blue;
  width: 100%;
  height: 80px;
  padding: 0 20px;
  position: sticky;
  bottom: 0;
  z-index: 1;
  overflow-x: hidden;
  overflow-y: auto;
`;

const MenuButton = styled.button`
  flex: 1;
  height: 50px;
  background-color: blue;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: purple;
  padding: 20px;
  border-radius: 8px;
  color: white;
  text-align: center;
  width: 360px;
  height: 320px;
  display: grid;
  grid-template-columns: repeat(5, 56px);
  gap: 10px;
  grid-template-rows: auto repeat(5, 30px) auto;
  position: relative;

  &:before {
    content: '지역ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ';
    font-weight: bold;
    color: black;
    grid-column: 1 / span 5;
  }

  button {
    width: 56px;
    height: 30px;
    background-color: white;
    color: black;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
  }

  .filler {
    grid-column: 1 / span 5;
    visibility: hidden;
  }
`;

const words = [
  '강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구',
  '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구',
  '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구',
];

const Modal = ({ onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent>
        {words.map((word, index) => (
          <button key={index}>{word}</button>
        ))}
        <div className="filler" />
      </ModalContent>
    </ModalOverlay>
  );
};

export default MainPage;
