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
`;

const Card = () => {
  const [cards, setCards] = useState([1, 2, 3, 4, 5]); // Initial cards
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
  }, [cards]); // Add 'cards' to the dependency array to re-observe when cards change

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      // When the target is intersecting (reached the bottom), add more cards in an infinite loop
      const newCardId = cards[cards.length - 1] + 1;
      setCards((prevCards) => [...prevCards, newCardId]);
    }
  };

  // Function to remove the first card when there are more than 10 cards
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
        {cards.map((cardId) => (
          <StyledCard key={cardId} />
        ))}
      </CardContainer>
      <div ref={observerRef} />
    </>
  );
};

export default Card;