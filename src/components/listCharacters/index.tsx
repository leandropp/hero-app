import React from 'react';
import { useCharacters } from '../../context/charactersContext';
import CardCharacter from './cardCharacter';

import { BodyList, HeaderList, HeadPrimary, HeadSecundary } from './styles';


const ListCharacters: React.FC = () => {
  const { state } = useCharacters();
  const { characters } = state;

  return (
    <>
    <HeaderList>

      <HeadPrimary>Personagem</HeadPrimary>
      <HeadSecundary>Séries</HeadSecundary>
      <HeadSecundary>Eventos</HeadSecundary>

    </HeaderList>
    <BodyList>
      { characters.map( item => <CardCharacter character={item} />) }
    </BodyList>
    </>
  );
}

export default ListCharacters;