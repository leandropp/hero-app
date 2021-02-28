import React from 'react';

import InputSearch from './inputSearch';

import { ContainerSearch, LabelInput, Title } from './styles';

const SearchCharacters: React.FC = () => {
  return (
    <ContainerSearch>
      <Title>Busca de personagens</Title>
      <LabelInput>Nome do personagem</LabelInput>
      <InputSearch />
    </ContainerSearch>
  );
}

export default SearchCharacters;