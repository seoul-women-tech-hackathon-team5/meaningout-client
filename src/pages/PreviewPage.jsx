import styled from "styled-components";
import React, { useRef } from "react"; // eslint-disable-line no-unused-vars
import PreviewHeader from "../components/PreviewPage/PreviewHeader";
import PreviewCard from "../components/PreviewPage/PreivewCard";
import { useNavigate } from "react-router-dom";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const StyledPreviewPage = styled.div`
  width: 390px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardContainer = styled.div`
  width: 334px;
  margin-top: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const EditButton = styled.button`
  width: 165px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #558BCF;
  color: #558BCF;
  margin-bottom: 7px;
  margin-right: 3px;
`;

const HomeButton = styled.button`
  width: 165px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #558BCF;
  color: #558BCF;
  margin-bottom: 7px;
`;

const SaveButton = styled.button`
  width: 334px;
  height: 48px;
  border-radius: 12px;
  color: white;
  background-color: #558BCF;
`;

const PreviewPage = () => {
  const navigate = useNavigate();
  const cardRef = useRef();

  const onDownloadButton = async () => {
    const card = cardRef.current;
    const filter = (card) => {
      return card.tagName !== "BUTTON";
    };

    try {
      const blob = await domtoimage.toBlob(card, { filter: filter });
      saveAs(blob, "card.png");
    } catch (error) {
      console.error("Error during download:", error);
    }
  };

  return (
    <StyledPreviewPage>
      <PreviewHeader />
      <PreviewCard ref={cardRef} />
      <CardContainer>
        <ButtonContainer>
          <EditButton
            onClick={() => {
              navigate("/make");
            }}
          >
            수정하기
          </EditButton>
          <HomeButton
            onClick={() => {
              navigate("/main");
            }}
            >
            홈으로
          </HomeButton>
        </ButtonContainer>
        <SaveButton
          onClick={() => {
            onDownloadButton();
          }}
        >
          저장하기
        </SaveButton>
      </CardContainer>
    </StyledPreviewPage>
  );
};

export default PreviewPage;
