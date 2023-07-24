import styled from 'styled-components';
import { useState } from 'react';

const StyledInputBox = styled.div`
    .input-title{
        font-size: 16px;
        font-weight: 700;
        margin-top: 16px;
        margin-bottom: 5px;
    }

    .input-explanation {
        font-size: 12px;
        color: #707070;
        margin-bottom: 5px;
    }

    input {
        width: 334px;
        height: 44px;
        border-radius: 10px;
        border: solid 1px #D9D9D9;
        padding: 12px;
        margin-bottom: 5px;
    }

    input:hover{
        border: solid 1px black;
    }

    textarea{
        width: 334px;
        height: 98px;
        border-radius: 10px;
        border: solid 1px #D9D9D9;
        padding: 12px;
    }

    textarea:hover{
        border: solid 1px black;
    }

    .key-counter {
        font-size: 10px;
        color: #898989;
    }

`

export default function InputBox () {
    const [name, setName] = useState('');
    const [keywords, setKeywords] = useState('');
    const [praise, setPraise] = useState('');

    const maxNameLength = 22; // 최대 이름 길이
    const maxKeywordsLength = 22; // 최대 키워드 길이
    const maxPraiseLength = 40; // 최대 칭찬 길이

    const handleNameChange = (event) => {
        let value = event.target.value;
        if (value.length > maxNameLength) {
          value = value.slice(0, maxNameLength); // 이름 길이가 최대 길이를 넘지 않도록 자름
        }
        setName(value);
      };
  
      const handleKeywordsChange = (event) => {
        let value = event.target.value;
        if (value.length > maxKeywordsLength) {
          value = value.slice(0, maxKeywordsLength); // 키워드 길이가 최대 길이를 넘지 않도록 자름
        }
        setKeywords(value);
      };
  
    const handlePraiseChange = (event) => {
      let value = event.target.value;
      if (value.length > maxPraiseLength) {
        value = value.slice(0, maxPraiseLength); // 칭찬 길이가 최대 길이를 넘지 않도록 자름
      }
      setPraise(value);
    };

    return(
        <StyledInputBox>
            <div className='name-container'>
                <div className='name-box'>
                    <div className='input-title'>선한 가게 이름</div>
                    <div className='input-explanation'>정확한 가게 이름일수록 선한 가게에 도움이 되어요</div>
                </div>
                <input
                    type="text"
                    name="department"
                    placeholder="선한 가게 이름을 입력해주세요"
                    value={name}
                    onChange={handleNameChange}
                    />
                <div className='key-counter'>{name.length}/{maxNameLength}자</div>
            </div>
            <div className='key-container'>
                <div className='key-box'>
                    <div className='input-title'>키워드</div>
                    <div className='input-explanation'>선한 가게를 나타낼 수 있는 키워드를 적어주세요</div>
                </div>
                <input
                    type="text"
                    name="department"
                    placeholder="키워드를 입력해주세요"
                    value={keywords}
                    onChange={handleKeywordsChange}
                    />
                <div className='key-counter'>{keywords.length}/{maxKeywordsLength}자</div>            
            </div>
            <div className='praise-container'>
                <div className='praise-box'>
                    <div className='input-title'>칭찬 한마디</div>
                    <div className='input-explanation'>선한 가게로 추천하는 이유를 알려주세요</div>
                </div>
                <textarea
                    placeholder="칭찬 한마디를 입력해주세요"
                    value={praise}
                    onChange={handlePraiseChange}
                    />                
                <div className='key-counter'>{praise.length}/{maxPraiseLength}자</div>
            </div>
        </StyledInputBox>
    )
}
