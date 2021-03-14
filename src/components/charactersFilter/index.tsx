import React from 'react';
import { useCharacters } from '../../context/charactersContext';
import { ICharactersFilter } from './types';

// import { Container } from './styles';

const CharactersFilter: React.FC<ICharactersFilter> = (props) => {
  const { showCharactersFilters } = useCharacters();
  
  return (
    <>
    {/* { showCharactersFilters && props.children } */}
    { props.children }
    </>
  );
}

export default CharactersFilter;