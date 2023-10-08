import styled from 'styled-components';
import CertificateHeader from './components/CertificateHeader';
import Receipt from './components/Receipt'
import { useNavigate } from 'react-router-dom';


const StyledCertification = styled.div`
    width: 390px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;

    .certificate-container {
        display: flex;
        flex-direction: column;
    }

    .title{
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 5px;
    }

    .explanation {
        font-size: 16px;
        color: #707070;
    }

    .next-btn {
        width: 334px;
        height: 48px;
        border-radius: 8px;
        border: 0;
        background-color: #558BCF;
        font-size: 16px;
        color: white;
        cursor: pointer;
        margin-top: 50px;
    }
`

const CertificationPage = () => {
    const isValidate = () => {
        const $imageFrame = document.querySelector('.img-frame');
        const $imgEmpty = $imageFrame.querySelectorAll('.empty');
    
        if ($imgEmpty.length > 0) {
          alert('이미지를 추가해주세요.');
          return false;
        }
    
        return true;
      };
    
      const navigate = useNavigate();
      const handleValidationClick = () => {
        if (isValidate()) {
          console.log('All images are filled. You can proceed!');
          navigate('/make', { state: {} });
        }
      };

    return (
        <StyledCertification>
            <CertificateHeader/>
            <div className='certificate-container'>
                <div>
                    <div className='title'>영수증을 인증해 주세요</div>
                    <div className='explanation'>우리 동네 선한 가게를 이용하셨나요?<br/>영수증을 통해 선한 가게 이용을 인증해 주세요</div>
                </div>
                <Receipt/>
            </div>
            <button
                className='next-btn'
                onClick={handleValidationClick}
                >
                영수증 인증 완료하기
            </button>
        </StyledCertification>
    );
}

export default CertificationPage;