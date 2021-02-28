import React from 'react';

import SearchIcon from '../../../components/ui/icons/search';

import { ContainerInput, Input, GridIcon } from './styles';


const InputSearch: React.FC = () => {

  const [value, setValue] = React.useState('');
  return (
        <ContainerInput>
            <Input
                value={value}
                onChange={ (e) => { setValue(e.target.value) }}
                placeholder='Search'
            />
            <GridIcon>
              <SearchIcon/>
            </GridIcon>
        </ContainerInput>
  );
}

export default InputSearch;