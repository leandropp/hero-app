export interface IBaseResponseMarvel<TResponse> {
    attributionHTML: string;
    attributionText: string;
    code: number;
    copyright: string;
    data: TResponse;
    etag: string;
    status: string;
}

export interface ISearchParams {
    offset: number;
    limit: number;
    nameStartsWith?: string;
}

export interface ICharacterDataContainer {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Array<ICharacter>;
}

export interface ICharacter {
    id: number;
    name: string;
    description: string;
    modified: Date;
    resourceURI: string;
    urls: Array<IUrl>;
    thumbnail: IImagem;
    comics: IList;
    stories: IList;
    events: IList;
    series: IList;
}

export interface IUrl {
    type: string;
    url: string;
}

export interface IImagem {
    path: string;
    extension: string;
}

export interface IList {
    available: number;
    returned: number;
    collectionURI: string;
    items: Array<ISummary>;
}

export interface ISummary {
    resourceURI: string;
    name: string;
    type?: string;
}
