import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledAreaItem = styled.div`
  font-size: 24px;
  font-weight: 800;

  button {
    display: flex;
    align-items: center;
  }

  .toggle-container {
    width: 100px;
    height: 540px;
    padding: 12px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 400;
    color: #A9A9A9;
    background-color: white;
    cursor: pointer;
    border: solid 1px #D9D9D9;
  }

  .toggle-container > div:hover {
    color: black;
    font-weight: 600;
  }
`;

export default function AreaItem({ title, content, onContentClick }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleContentClick = (clickedTitle) => {
    onContentClick(clickedTitle);
    setIsExpanded(false);
  };

  return (
    <StyledAreaItem>
      <button onClick={handleToggle}>
        {isExpanded ? title : title}
        <img src='/assets/icons/toggle.svg' alt='toggle' />
      </button>
      {isExpanded && (
        <div className='toggle-container'>
          {content.map((item, index) => (
            <div
              key={index}
              onClick={() => handleContentClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </StyledAreaItem>
  );
}

AreaItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  onContentClick: PropTypes.func.isRequired,
};
