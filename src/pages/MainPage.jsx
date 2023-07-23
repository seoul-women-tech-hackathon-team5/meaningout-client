import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

const MainPage = () => {
  const redScreenRef = useRef(null);
  const [cards, setCards] = useState(generateRandomCards(10));

  const fetchMoreData = () => {
    setCards((prevCards) => [...prevCards, ...generateRandomCards(10)]);
  };

  useEffect(() => {
    redScreenRef.current.addEventListener('scroll', handleScroll);
    return () => {
      redScreenRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const redScreen = redScreenRef.current;
    if (
      redScreen.scrollTop + redScreen.clientHeight >=
      redScreen.scrollHeight - 10
    ) {
      fetchMoreData();
    }
  };

  return (
    <PageWrapper>
      <RedScreen ref={redScreenRef}>
        <LogoContainer>
          <LogoText>LOGO</LogoText>
        </LogoContainer>
        <InfiniteScroll
          dataLength={cards.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <CardContainer>
            {cards.map((card, index) => (
              <Card key={index} style={{ backgroundColor: card.color }} />
            ))}
          </CardContainer>
        </InfiniteScroll>
        <Menu>
          <MenuButton>HOME</MenuButton>
          <MenuButton>MAKE CARD</MenuButton>
          <MenuButton>MY PAGE</MenuButton>
        </Menu>
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

  /* Hide the scrollbar */
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
  z-index: 1;
`;

const LogoText = styled.div`
  color: black;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
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

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default MainPage;
