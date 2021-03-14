import React from "react";
import { ICharacter } from "../services/marvelApi/types";

export interface ICharacterProps {
    children: React.ReactNode;
}

export interface ICharacterContext {
    characters: Array<ICharacter>;
    characterSelected: ICharacter | null;
    
    pagination: IPagination;
    searchName: string;
    showModalDetails: boolean;
    showCharactersFilters: boolean;

    updatePage(page: number): void;
    searchCharactersByName(search: ISearchMarvel): void;
    handleChangeSearchName(name: string): void;
    handleDetailsCharacter(characterId?: number): void;
}

export interface IPagination {
    currentPage: number;
    totalPages: number;
    offset: number;
    limit: number;
    Pages: Array<number>;
}

export interface ISearchMarvel {
    page?: number;
    name?: string;
}