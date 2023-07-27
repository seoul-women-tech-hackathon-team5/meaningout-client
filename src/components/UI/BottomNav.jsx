import styled from 'styled-components';
import { useState } from "react";
import { Link } from "react-router-dom";

const StyledBottomNav = styled.div`
    height: 5.188rem;
    position: fixed;
    bottom: 0;

    display: flex;
    justify-content: center;
    border-top-style: solid;
    border-top-width: 0.5px;
    z-index: -10;

    button { 
        width: 8.125rem;
        height: 2.875rem;
        padding: 8.58px 0 6px 0;
    }

    img {
        width: 1.5rem;
        height: 1.5rem;
    }

    .nav-item {
        color: grey;
    }

    .active {
        color: #2294FF;
    }
`

export default function BottomNav() {
    const [activeNav, setActiveNav] = useState(1);
    return (
        <StyledBottomNav>
            <nav>
                <Link to="/main" onClick={() => setActiveNav(1)}>
                    <button
                        className={activeNav === 1 ? "nav-item active" : "nav-item"}
                    >
                        <img src='/assets/icons/home.svg' alt='people'/>
                        <div>홈</div>
                    </button>
                </Link>
                <Link to="/certificate" onClick={() => setActiveNav(2)}>
                    <button
                        className={activeNav === 2 ? "nav-item active" : "nav-item"}
                    >
                        <img src='/assets/icons/make.svg' alt='people'/>
                        <div>make</div>
                    </button>
                </Link>
                <Link to="/my" onClick={() => setActiveNav(3)}>
                    <button
                        className={activeNav === 3 ? "nav-item active" : "nav-item"}
                    >
                        <img src='/assets/icons/mypage.svg' alt='people'/>
                        <div>mypage</div>
                    </button>
                </Link>
            </nav>
        </StyledBottomNav>
    );
}