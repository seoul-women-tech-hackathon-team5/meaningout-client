import styled from 'styled-components';

import { useRecoilState } from "recoil";
import { useState } from 'react'; 
import { CardAtom } from '../../recoil/CardAtom';

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
    const [card, setCard] = useRecoilState(CardAtom);
    const [selectedImgSrc, setSelectedImgSrc] = useState(""); 

    const handleButtonClick = (src) => {
        setSelectedImgSrc(src); // 클릭된 버튼의 이미지 src를 저장
        setCard(src); // 클릭된 버튼의 이미지 src를 CardAtom에 설정
    };

    console.log("카드:", card);
    console.log("카드 src:", selectedImgSrc);

    return(
        <StyledCharacterBox>
            <div className='character-container'>
                <div className='container-row'>
                    <button onClick={() => handleButtonClick('/assets/img/oza_001.jpg')}>
                        <img src='/assets/img/oza_001.jpg'/>
                    </button>
                    <button onClick={() => handleButtonClick('/assets/img/oza_002.jpg')}>
                        <img src='/assets/img/oza_002.jpg'/>
                    </button>
                </div>
                <div className='container-row'>
                    <button onClick={() => handleButtonClick('/assets/img/oza_003.jpg')}>
                        <img src='/assets/img/oza_003.jpg'/>
                    </button>
                    <button onClick={() => handleButtonClick('/assets/img/oza_004.jpg')}>
                        <img src='/assets/img/oza_004.jpg'/>
                    </button>
                </div>
            </div>
        </StyledCharacterBox>
    )
}
