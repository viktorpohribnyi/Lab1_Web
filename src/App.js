import React from 'react';
import AnimeDialog from './components/AnimeDialog';
import AnimeList from './components/AnimeList';
import StyledAnimeComponent from './components/StyledAnimeComponent';
import { AppContainer, Header } from './App.styled';
import './styles/global.css';

function App() {
    return (
        <AppContainer>
            <Header>Anime World</Header>
            <AnimeDialog />
            <AnimeList />
            <StyledAnimeComponent />
        </AppContainer>
    );
}

export default App;
