import React from 'react';

import SearchIcon from '../../../components/ui/icons/search';
import { useCharacters } from '../../../context/charactersContext';

import { ContainerInput, Input, GridIcon } from './styles';


const InputSearch: React.FC = () => {
  const { searchCharactersByName } = useCharacters();

  const [valueInputSearch, setValueInputSearch] = React.useState('');

  return (
        <ContainerInput>
            <Input
                value={valueInputSearch}
                onChange={ (e) => { setValueInputSearch(e.target.value) }}
                placeholder='Search'
            />
            <GridIcon onClick={ _ => searchCharactersByName({ searchName: valueInputSearch})}>
              <SearchIcon />
            </GridIcon>
        </ContainerInput>
  );
}

export default InputSearch;