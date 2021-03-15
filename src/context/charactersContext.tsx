import React, { createContext, useContext, useEffect, useState } from 'react';

import { getCharacterById, getCharactersMarvel } from '../services/marvelApi/marvinApi';
import { ICharacter, ISearchParams } from '../services/marvelApi/types';
import { ICharacterContext, ICharacterProps, IPagination, ISearchMarvel } from './types';


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
  const [characterSelected, setCharacterSelected] = useState<ICharacter | null>(null);

  const [pagination, setPagination] = useState<IPagination>(initialPagination);
  const [searchName, setSearchName] = useState<string>('');
  
  const [showModalDetails, setShowModalDetails] = useState<boolean>(false);
  const [showCharactersFilters, setShowCharactersFilters] = useState<boolean>(false);


  const getCharacters = (searchParams: ISearchMarvel) => {
    const { page, name } = searchParams;

    const offset = page ? (page * 4) - 4 : 0;
    const request: ISearchParams = {
      limit: 4,
      offset,
      nameStartsWith: name,
    };

    getCharactersMarvel(request).then((response) => {
      const { data } = response;
      if (!data) return;
      
      const { results, offset, limit, total } = data;

      const pages = Math.floor(total/4);
      const totalPages = pages === total*4 ? pages : pages + 1;

      const newCharacters = results;
      const newPagination:IPagination = {
        ...pagination,
        offset,
        limit,
        totalPages,
        currentPage: page || 1,
      }

      setCharacters(newCharacters);
      setPagination({...newPagination});
  })
  .catch(() => { })
  }

  useEffect(() => getCharacters({}), []);


  const updatePage = (page: number) => getCharacters({ page });

  const searchCharactersByName = (search: ISearchMarvel) => {
    const { name } = search;
    
    if (!!name) {
      setSearchName(name);
     getCharacters({ page: 1, name });
    }
  };

  const handleChangeSearchName = (name: string) => setSearchName(name);
  
  const handleDetailsCharacter = (characterId: number) => {
    if (characterId) {
      const filteredCharacter = characters.find( ch => ch.id === characterId);
      setCharacterSelected(filteredCharacter || null);
    }
    setShowModalDetails(!!characterId);
  } 

  const getDetailsCharacter = async () => {
    if (!characterSelected) return null;
    try {
      const response = await getCharacterById(characterSelected.id);

      if (!response) return null;

      return response.data;

    } catch {
      return null;
    }
  }

  return (<Provider value={{
    characters,
    pagination,
    searchName,
    showModalDetails,
    showCharactersFilters,
    characterSelected,

    updatePage,
    searchCharactersByName,
    handleChangeSearchName,
    handleDetailsCharacter,
  }}>{ children }</Provider>);
}

export const useCharacters = (): ICharacterContext => useContext(CharacterStore);