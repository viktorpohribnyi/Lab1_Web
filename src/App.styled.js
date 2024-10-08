import styled from 'styled-components';

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
`;

export const Header = styled.h1`
    font-size: 3rem;
    color: #FF6B6B;
    margin-bottom: 20px;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
    font-family: 'AnimeFont', sans-serif;
    animation: animeGlow 1.5s infinite alternate;

    @keyframes animeGlow {
        from {
            text-shadow: 0 0 10px #FF6B6B, 0 0 20px #FF6B6B, 0 0 30px #FF8787;
        }
        to {
            text-shadow: 0 0 20px #FF8787, 0 0 30px #FF6B6B, 0 0 40px #FFC1C1;
        }
    }
`;
