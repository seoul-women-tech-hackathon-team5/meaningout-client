import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledMakeHeader = styled.div`
    height: 4rem;
    position: fixed;
    top: 0;

    display: flex;
    justify-content: flex-start;
    padding: 19px;
    background: pink;
    z-index: 10px;
`

export default function MakeHeader () {
    return(
        <StyledMakeHeader>
            <Link to="/main">
                <img src="/assets/icons/arrow-back.svg"/>
            </Link>
        </StyledMakeHeader>
    )
}
