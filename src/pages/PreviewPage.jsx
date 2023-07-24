import styled from 'styled-components';

const StyledPreviewPage = styled.div`
    width: 390px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
`

const PreviewPage = () => {
    return (
        <StyledPreviewPage>
            <div>PreiviewPage</div>
        </StyledPreviewPage>
    );
}

export default PreviewPage;