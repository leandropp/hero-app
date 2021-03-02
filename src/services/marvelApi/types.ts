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
    comics: IList;
    description: string;
    events: IList; // ( EventList , opcional ): Uma lista de recursos de eventos em que este personagem aparece. ,
    id: number; // ( int , opcional ): O ID exclusivo do recurso de caractere. ,
    modified: Date; // ( Data , opcional ): A data em que o recurso foi modificado mais recentemente. ,
    name: string; // ( string , opcional ): O nome do personagem. ,
    resourceURI: string; // ( string , opcional ): O identificador de URL canônico para este recurso. ,
    series: IList; // ( SeriesList , opcional ): uma lista de recursos das séries nas quais esse personagem aparece.
    stories: IList; // ( StoryList , opcional ): Uma lista de recursos de histórias em que esse personagem aparece. ,
    thumbnail: IImagem; // ( imagem , opcional ): a imagem representativa deste personagem. ,
    urls: Array<IUrl>; // ( Array [Url] , opcional ): Um conjunto de URLs de sites públicos para o recurso. ,
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
    collectionURI: string;
    items: Array<ISummary>;
    returned: number;
}

export interface ISummary {
    resourceURI: string;
    name: string;
    type?: string;
}
