import { useState } from "react";
import styled from "styled-components";
import { AreaList } from "./AreaList";

const abledAreas = ['영등포구', '강남구']; 

export default function AreaToggle() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("영등포구");

  const handleToggle = () => {
    setIsExpanded(true);
    console.log(isExpanded);
  };

  const handleContentItemClick = (clickedItem) => {
    if (abledAreas.includes(clickedItem)) {
      setCurrentTitle(clickedItem);
      setIsExpanded(false);
    }
  };

  return (
    <StyledAreaToggle>
      <CurrentArea onClick={handleToggle}>
        <CurrentAreaName>{currentTitle}</CurrentAreaName>
        <img src="/assets/icons/toggle.svg" alt="toggle" />
      </CurrentArea>
      {isExpanded && (
        <ToggleContainer>
          {AreaList.map((item, index) => (
            <AreaItem key={index} onClick={() => handleContentItemClick(item)} abled={abledAreas.includes(item)}>
              {item}
            </AreaItem>
          ))}
        </ToggleContainer>
      )}
    </StyledAreaToggle>
  );
}

const StyledAreaToggle = styled.div`
  width: 107px;
  height: 40px;
`;

const CurrentArea = styled.button`
  display: flex;
  align-items: center;
  text-decoration: none;
  outline: none;
`;

const CurrentAreaName = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ToggleContainer = styled.div`
  position: fixed;
  width: 114px;
  height: 167px;
  background-color: white;
  overflow-y: scroll;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;

const AreaItem = styled.div`
  width: 90px;
  height: 19px;
  color: ${({ abled }) => (abled ? 'black' : '#a9a9a9')};
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  cursor: ${({ abled }) => (abled ? 'pointer' : 'not-allowed')};
  ${({ abled }) => ( abled ?  `
    &:hover{
      font-weight: 700;
    }` : '')}
`;
