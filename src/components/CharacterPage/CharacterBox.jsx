import styled from 'styled-components';

const StyledCharacterBox = styled.div`


    .character-conatiner {
        display: flex;
        flex-direction: column;
    }

    .container-row {
        display: flex;
        gap: 10px;
        margin-bottom: 10px;
    }

    button { 
        width: 158px;
        height: 124px;
    }

    img {
        width: 158px;
        height: 124px;
        object-fit: cover;
        border-radius: 3px;
    }

    img:hover {
        border: solid 5px #AFD8FF;
    }

`

export default function CharacterBox () {
    return(
        <StyledCharacterBox>
            <div className='character-container'>
                <div className='container-row'>
                    <button>
                        <img src='/assets/img/oza_001.jpg'/>
                    </button>
                    <button>
                        <img src='/assets/img/oza_002.jpg'/>
                    </button>
                </div>
                <div className='container-row'>
                    <button>
                        <img src='/assets/img/oza_003.jpg'/>
                    </button>
                    <button>
                        <img src='/assets/img/oza_004.jpg'/>
                    </button>
                </div>
            </div>
        </StyledCharacterBox>
    )
}
