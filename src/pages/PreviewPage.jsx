import styled from 'styled-components';

const StyledPreviewPage = styled.div`
    width: 390px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PreviewPage = () => {
    return (
        <StyledPreviewPage>
            <div>PreiviewPage</div>
        </StyledPreviewPage>
    );
}

export default PreviewPage;