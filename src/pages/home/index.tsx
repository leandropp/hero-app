import React from 'react';

import Toolbar from '../../components/toolbar';
import Footer from '../../components/footer';
import SearchCharacters from '../../components/searchCharacters';
import ListCharacters from '../../components/listCharacters';

import { Body } from './styles';
import { CharactersProvider } from '../../context/charactersContext';

const Home: React.FC = () => {
    const user = 'Leandro Pereira da Paixão';

    return (
    <>
        <Toolbar user={user}/>

        <CharactersProvider>
            <Body>
                <SearchCharacters />
                <ListCharacters />
            </Body>
            <Footer />
        </CharactersProvider>

    </>
    );
};

export default Home;
