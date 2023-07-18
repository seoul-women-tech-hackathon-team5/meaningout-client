import styled from 'styled-components';

const StyledMakeCard = styled.div`
    width: 358px;
    height: 538px;
    position: fixed;
    top: 72px;
    border-radius: 8px;
    padding: 2rem;
    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: center;

    .card-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .card-header > img {
        width: 80px;
    }

    .market-information {
        width: 298px;
        height: 148px;
        border-radius: 8px;
        margin-bottom: 1.5rem;
        background-color: blue;
    }

    input {
        width: 298px;
        height: 40px;
        border-radius: 8px;
        border: solid 1px black;
        margin-bottom: 0.5rem;
    }
`

export default function MakeCard () {
    return(
        <StyledMakeCard>
            <div className='card-header'>
                <img src='/assets/icons/crown.svg' alt='crwon'/>
                <div>선한 가게로 추천해요</div>
            </div>
            <div className='market-information'>
                {/* 가게 API */}
            </div>
            <div className='input-container'>
                <div>
                    <p>해시태그</p>
                    <input type='text' placeholder='해시태그를 입력해주세요'/>
                </div>
                <div>
                    <p>사연</p>
                    <input type='text' placeholder='사연을 입력해주세요'/>
                </div>
            </div>
        </StyledMakeCard>
    )
}