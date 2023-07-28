import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
`;

const StyledCard = styled.div`
  width: 150px;
  height: 200px;
  background-color: #558BCF;
  margin: 8px;
  border-radius: 8px;

  display: flex;
  padding: 20px;
`;

const Card = () => {
  // Add any necessary logic here if required for the cards

  return (
    <CardContainer>
      <StyledCard />
      <StyledCard />
    </CardContainer>
  );
};

export default Card;
