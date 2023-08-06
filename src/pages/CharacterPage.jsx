import styled from "styled-components";
import CharacterHeader from "../components/CharacterPage/CharacterHeader";
import CharacterBox from "../components/CharacterPage/CharacterBox";
import { useNavigate } from "react-router-dom";

const StyledCharacter = styled.div`
  width: 390px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  .title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .explanation {
    font-size: 16px;
    color: #707070;
  }

  .character-container {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  .character-text {
    margin-bottom: 18px;
  }

  .next-btn {
    width: 334px;
    height: 48px;
    border-radius: 8px;
    border: 0;
    background-color: #2294ff;
    font-size: 16px;
    color: white;
    cursor: pointer;
    margin-top: 50px;
  }
`;

const CharacterPage = () => {
  const navigate = useNavigate();
  return (
    <StyledCharacter>
      <CharacterHeader />
      <div className="character-container">
        <div className="character-text">
          <div className="title">캐릭터를 선택해 주세요</div>
          <div className="explanation">
            마음에 드는 카드에 들어갈
            <br />
            캐릭터를 선택해 주세요
          </div>
        </div>
        <CharacterBox />
      </div>
      <button
        className="next-btn"
        onClick={() => {
          navigate("/preview");
        }}
      >
        선택 완료하기
      </button>
    </StyledCharacter>
  );
};

export default CharacterPage;
