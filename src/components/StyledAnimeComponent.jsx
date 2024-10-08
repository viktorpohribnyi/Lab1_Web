import React, { useState } from 'react';
import styled from 'styled-components';

const AnimeButton = styled.button`
    background-color: #FF6B6B;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background-color: #FF8787;
        box-shadow: 0 0 5px #FFC1C1;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
`;

function StyledAnimeComponent() {
    const [magic, setMagic] = useState(false);

    const handleMagicClick = () => {
        setMagic(!magic);
        alert(magic ? 'Magic has been deactivated!' : 'Magic has been activated!');
    };

    return (
        <Container>
            <AnimeButton onClick={handleMagicClick}>Magic Button</AnimeButton>
            {magic && <p style={{ color: '#FF6B6B', marginTop: '10px' }}>✨ Magic is happening! ✨</p>}
        </Container>
    );
}

export default StyledAnimeComponent;
