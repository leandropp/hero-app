import React from "react";
import { ICharacter } from "../services/marvelApi/types";

export interface ICharacterProps {
    children: React.ReactNode;
}

export interface ICharacterContext {
    characters: Array<ICharacter>;
    pagination: IPagination;

    updatePage(page: number): void;
}

export interface IPagination {
    currentPage: number;
    totalPages: number;
    offset: number;
    limit: number;
    Pages: Array<number>;
}
