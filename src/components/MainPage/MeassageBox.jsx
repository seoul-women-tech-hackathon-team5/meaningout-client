import styled from 'styled-components';

const StyledMessageBox  = styled.div`
    width: 334px;
    height: 140px;
    border: 1px solid #558BCF;
    border-radius: 8px;
    z-index: -10;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;

    .today-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #558BCF;
        font-weight: 600;
    }

    .number {
        font-size: 35px;
        font-weight: 700;
    }

    @property --rotate {
        syntax: "<angle>";
        initial-value: 132deg;
        inherits: false;
      }

      :root {
        --card-height: 65vh;
        --card-width: calc(var(--card-height) / 1.5);
      }

    .card{
        background: white;
        width: 50px;
        height: 80px;
        padding: 3px;
        position: relative;
        border-radius: 6px;
        justify-content: center;
        align-items: center;
        text-align: center;
        display: flex;
        font-size: 1.5em;
        // color: rgb(88 199 250 / 0%);
        color: black;
        cursor: pointer;
        // font-family: cursive;
    }
          
    .card:hover {
        color: rgb(88 199 250 / 100%);
        transition: color 1s;
    }
    .card:hover:before, .card:hover:after {
        animation: none;
        opacity: 0;
    }
    .card::before {
        content: "";
        width: 104%;
        height: 102%;
        border-radius: 8px;
        background-image: linear-gradient(
        var(--rotate)
            , #5ddcff, #3c67e3 43%, #4e00c2);
        position: absolute;
        z-index: -1;
        top: -1%;
        left: -2%;
        animation: spin 2.5s linear infinite;
    }
          
    .card::after {
        position: absolute;
        content: "";
        top: calc(var(--card-height) / 6);
        left: 0;
        right: 0;
        z-index: -1;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        transform: scale(0.8);
        filter: blur(calc(var(--card-height) / 6));
        background-image: linear-gradient(
        var(--rotate)
        , #5ddcff, #3c67e3 43%, #4e00c2);
        opacity: 1;
        transition: opacity .5s;
        animation: spin 2.5s linear infinite;
    }
          
    @keyframes spin {
        0% {
            --rotate: 0deg;
        }
        100% {
            --rotate: 360deg;
        }
    }      
`

export default function MessageBox () {
    return(
        <StyledMessageBox>
            <div className='today-card'>
                <div>오늘 들어온 카드</div>
                <div className='number'>40</div>
            </div>
            <div className='today-card'>
                <div>함께 하는 착한 가게</div>
                <div className='number'>152</div>
            </div>
        </StyledMessageBox>
    )
}
