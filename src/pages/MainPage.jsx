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
        <LogoText>LOGO</LogoText>
        MainPage
        <Menu>
          <MenuButton>HOME</MenuButton>
          <MenuButton>MAKE CARD</MenuButton>
          <MenuButton>MY PAGE</MenuButton>
        </Menu>
        <InfiniteScroll
          dataLength={cards.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          style={{ overflow: 'hidden' }}
        >
          {cards.map((card, index) => (
            <Card key={index} style={{ backgroundColor: card.color }} />
          ))}
        </InfiniteScroll>
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
  width: 350px;
  height: 530px;
  margin: 8px;
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
