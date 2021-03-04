import React from "react";
import { ICharacter } from "../services/marvelApi/types";

export interface ICharacterProps {
    children: React.ReactNode;
}

export interface ICharacterContext {
    characters: Array<ICharacter>;
    pagination: IPagination;
    searchName: string;

    updatePage(page: number): void;
    searchCharactersByName(search: ISearchMarvel): void;
    handleChangeSearchName(name: string): void;
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
    searchName?: string;
}