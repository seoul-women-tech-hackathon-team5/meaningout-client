import styled from 'styled-components';
import MakeHeader from '../components/MakePage/MakeHeader';
import MakeCard from '../components/MakePage/MakeCard';

const StyledMake = styled.div`
    width: 390px;
    height: 100vh;
    background-color: red;

    .make-container {
        display: flex;
        justify-content: center;
    }
    button {
        width: 358px;
        height: 52px;
        border-radius: 8px;
        border: 0;
        background-color: black;
        font-size: 18px;
        color: white;
        cursor: pointer;
        position: fixed;
        bottom: 80px;
    }
`

const MakePage = () => {
    return (
        <StyledMake> 
            <MakeHeader/>
            <div className='make-container'>
                <MakeCard/>
                <button>완성하기</button>
            </div>
        </StyledMake>
    );
}

export default MakePage;