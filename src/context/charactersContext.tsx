import React, { createContext, useContext, useEffect, useReducer } from 'react';

import { characterReducer } from '../reducers/characterReducer';
import { getCharacters } from '../services/marvelApi/marvinApi';
import { ISearchParams } from '../services/marvelApi/types';
import { ICharacterContext, ICharacterState, ICharacterProps } from './types';


const initialState: ICharacterState = {
  characters: [],
  pagination: {
    maxPage: 0,
    pages: 0,
    selectedPage: null,
  }
} 

export const CharacterStore = createContext<ICharacterContext>({} as ICharacterContext);

const { Provider } = CharacterStore;

export const CharactersProvider: React.FC<ICharacterProps> = ({ children }): JSX.Element => {


  const [state, dispatch] = useReducer(characterReducer, initialState);


  useEffect(() => {

    const request: ISearchParams = {
      limit: 4,
      offset: 0,
    };

    getCharacters(request).then((response) => {
      const { data } = response;
      if (!data) return;
      
      const { results: resultados } = data;
      const newCharacters = resultados;
      dispatch({ type: 'UPDATE_CHARACTERS', payload: newCharacters }) 
  })
  .catch(() => {
      return state;
  })

  }, []);
  
/*

  const [state, dispatch] = useReducer<ICharacterContextState>(reducer, initialValues);
  dispatch({ type: 'SELECTED', payload: ''})

  const page = 3
  const limit = 4
  const offset = (page - 1)  * limit;
  const pagination: ISearchParams = { limit, offset };

  getCharacters(pagination).then( (result: any) => console.log({result}));
*/

  return (<Provider value={{ state, dispatch }}>{ children }</Provider>);
}

export const useCharacters = (): ICharacterContext => useContext(CharacterStore);