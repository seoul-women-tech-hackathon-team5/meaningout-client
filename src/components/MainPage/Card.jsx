// import React, { useState, useRef, useEffect } from 'react';
// import styled from 'styled-components';

// const CardContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   margin-top: 330px;
// `;

// const StyledCard = styled.div`
//   width: 150px;
//   height: 200px;
//   background-color: white;
//   margin: 20px;
//   border-radius: 8px;
//   display: flex;
//   padding: 20px;
//   justify-content: center;
//   align-items: center;
//   font-size: 24px;
//   font-weight: 600;
//   color: white;

//   ${(props) =>
//     props.content === '영등포구' &&
//     `
//       color: black;
//     `}

//   img {
//     max-width: 130%;
//     max-height: 130%;
//     object-fit: cover;
//     object-position: center bottom; /* Adjust the object position to move the starting point of the image */
//   }
// `;

// const Card = () => {
//   const [cards, setCards] = useState([1, 2, 3, 4, 5]);
//   const observerRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(handleObserver, {
//       root: null,
//       rootMargin: '20px',
//       threshold: 1.0,
//     });

//     if (observerRef.current) {
//       observer.observe(observerRef.current);
//     }

//     return () => {
//       if (observerRef.current) {
//         observer.unobserve(observerRef.current);
//       }
//     };
//   }, [cards]);

//   const handleObserver = (entries) => {
//     const target = entries[0];
//     if (target.isIntersecting) {
//       const newCardId = cards[cards.length - 1] + 1;
//       setCards((prevCards) => [...prevCards, newCardId]);
//     }
//   };

//   const removeFirstCard = () => {
//     setCards((prevCards) => prevCards.slice(1));
//   };

//   useEffect(() => {
//     if (cards.length > 10) {
//       const timer = setTimeout(removeFirstCard, 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [cards]);

//   const getImageUrl = (imageName) => {
//     return `assets/img/${imageName}.jpg`; // Assuming the images are in the "public/assets/img" directory
//   };

//   return (
//     <>
//       <CardContainer>
//         {cards.map((cardId) => (
//           <StyledCard key={cardId} content="영등포구">
//             <img src={getImageUrl(cardId)} alt={`Image ${cardId}`} />
//           </StyledCard>
//         ))}
//       </CardContainer>
//       <div ref={observerRef} />
//     </>
//   );
// };

// export default Card;
