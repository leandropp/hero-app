import React from "react";
import { ICharacter, ISearchParams } from "../services/marvelApi/types";

export interface ICharacterState {
    characters: Array<ICharacter>;
    pagination: IPagination;
}

export interface ICharacterProps {
    children: React.ReactNode;
}

export interface ICharacterContext {
    state: ICharacterState;
    dispatch: React.Dispatch<IActionCharacter>;

}

export interface IActionCharacter {
    type: CharacterReducerType;
    payload: Array<ICharacter>;
}

export type CharacterReducerType = 'UPDATE_CHARACTERS' | 'LIST_CHARACTERS' | 'SELECT_CHARACTER';

export interface IPagination {
    pages: number;
    selectedPage: number | null;
    maxPage: number;

}
