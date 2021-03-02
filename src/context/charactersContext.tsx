import React, { createContext, useContext, useEffect, useState } from 'react';

import { getCharactersMarvel } from '../services/marvelApi/marvinApi';
import { ICharacter, ISearchParams } from '../services/marvelApi/types';
import { ICharacterContext, ICharacterProps, IPagination } from './types';


export const CharacterStore = createContext<ICharacterContext>({} as ICharacterContext);

const { Provider } = CharacterStore;

export const CharactersProvider: React.FC<ICharacterProps> = ({ children }): JSX.Element => {


  const initialPagination: IPagination = {
    currentPage: 0,
    offset: 0,
    limit: 4,
    totalPages: 0,
    Pages: [],
  }

  const [characters, setCharacters] = useState<Array<ICharacter>>([]);
  const [pagination, setPagination] = useState<IPagination>(initialPagination);


  const getCharacters = (page?: number) => {

    const offset = page ? (page * 4) - 4 : 0;

    const request: ISearchParams = {
      limit: 4,
      offset,
    };

    getCharactersMarvel(request).then((response) => {
      const { data } = response;
      if (!data) return;
      
      const { results, offset, limit, total } = data;
      const newCharacters = results;
      const newPagination:IPagination = {
        ...pagination,
        offset,
        limit,
        totalPages: total + 1,
        currentPage: page || 1,
      }

      setCharacters(newCharacters);
      setPagination(newPagination);
  })
  .catch(() => { })

  }

  useEffect(() => getCharacters(), []);

  const updatePage = (page: number) => getCharacters(page);
  

  return (<Provider value={{
    characters,
    pagination,

    updatePage,
  }}>{ children }</Provider>);
}

export const useCharacters = (): ICharacterContext => useContext(CharacterStore);