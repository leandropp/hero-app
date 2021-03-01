import React from 'react';

import SearchIcon from '../../../components/ui/icons/search';

import { ContainerInput, Input, GridIcon } from './styles';


const InputSearch: React.FC = () => {

  const [valueInputSearch, setValueInputSearch] = React.useState('');

  return (
        <ContainerInput>
            <Input
                value={valueInputSearch}
                onChange={ (e) => { setValueInputSearch(e.target.value) }}
                placeholder='Search'
            />
            <GridIcon>
              <SearchIcon/>
            </GridIcon>
        </ContainerInput>
  );
}

export default InputSearch;