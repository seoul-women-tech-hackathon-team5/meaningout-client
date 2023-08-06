import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledAreaItem = styled.div`
  font-size: 24px;
  font-weight: 800;

  button {
    display: flex;
    align-items: center;
    text-decoration: none; /* Remove the default underline */
    outline: none; /* Remove the default outline */
  }

  .toggle-container {
    width: 100px;
    height: ${(props) => (props.isExpanded ? '570px' : '0')};
    overflow: hidden;
    padding: ${(props) => (props.isExpanded ? '12px' : '0')};
    border-radius: 8px;
    font-size: 16px;
    font-weight: 400;
    color: #a9a9a9;
    background-color: white;
    cursor: pointer;
    border: ${(props) => (props.isExpanded ? 'solid 1px #d9d9d9' : 'none')};
    position: relative;
    transition: height 0.3s ease-in-out, padding 0.3s ease-in-out;
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

  const handleContentItemClick = (clickedItem) => {
    onContentClick(clickedItem);
    setIsExpanded(false);
  };

  return (
    <StyledAreaItem isExpanded={isExpanded}>
      <button onClick={handleToggle}>
        {title}
        <img src='/assets/icons/toggle.svg' alt='toggle' />
      </button>
      <div className='toggle-container'>
        {content.map((item, index) => (
          <div key={index} onClick={() => handleContentItemClick(item)}>
            {item}
          </div>
        ))}
      </div>
    </StyledAreaItem>
  );
}

AreaItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  onContentClick: PropTypes.func.isRequired,
};
