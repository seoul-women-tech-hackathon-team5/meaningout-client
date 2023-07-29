import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`;

const StyledCard = styled.div`
  width: 150px;
  height: 200px;
  background-color: #558BCF;
  margin: 10px;
  border-radius: 8px;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  color: white;
`;

const Card = ({ selectedArea }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Find the index of the selectedArea in the areaNames array
    const areaNames = [
      '강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구',
      '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구',
      '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'
    ];

    const selectedAreaIndex = areaNames.indexOf(selectedArea);

    if (selectedAreaIndex !== -1) {
      const newCards = Array.from({ length: selectedAreaIndex + 1 }, (_, index) => areaNames[index]);
      setCards(newCards);
    } else {
      setCards([]);
    }
  }, [selectedArea]);

  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [cards]);

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      // When the target is intersecting (reached the bottom), add more cards in an infinite loop
      const newCardId = cards[cards.length - 1];
      setCards((prevCards) => [...prevCards, newCardId]);
    }
  };

  const removeFirstCard = () => {
    setCards((prevCards) => prevCards.slice(1));
  };

  useEffect(() => {
    // If there are more than 10 cards, remove the first card after a short delay
    if (cards.length > 10) {
      const timer = setTimeout(removeFirstCard, 1000);
      return () => clearTimeout(timer);
    }
  }, [cards]);

  return (
    <>
      <CardContainer>
        {cards.map((cardContent) => (
          <StyledCard key={cardContent}>{cardContent}</StyledCard>
        ))}
      </CardContainer>
      <div ref={observerRef} />
    </>
  );
};

export default Card;
