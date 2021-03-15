import md5 from 'md5';
import { IBaseResponseMarvel, ICharacterDataContainer, ISearchParams } from './types';

async function fetchMarvel (url: string, isParams: boolean = false):Promise<any> {
    const auth = await getAuth();
    const baseUrl = 'http://gateway.marvel.com/v1/public';

    const request = `${baseUrl}/${url}${isParams ? '&' : '?'}${auth}`;
    try {
        const result = await fetch(request);
        if (result.ok) return result.json();
        return null;
    } catch {
        return null;
    }
}

async function getAuth () {
    const ts = Date.now();
    const keyPublic = '';
    const keyPrivate = '';
    const hash = md5(ts + keyPrivate + keyPublic);
    return `ts=${ts}&apikey=${keyPublic}&hash=${hash}`;
}

export const getCharactersMarvel = async (searchParams: ISearchParams )
:Promise<IBaseResponseMarvel<ICharacterDataContainer>> => {
    const url = 'characters';

    const { limit, offset, nameStartsWith } = searchParams;

    console.log({ searchParams });
    
    let params = `?limit=${limit}&offset=${offset}`;

    if(!!nameStartsWith) params += `&nameStartsWith=${nameStartsWith}`;

    return fetchMarvel(url + params, true);
}

export const getCharacterById = async (characterId: number)
:Promise<IBaseResponseMarvel<ICharacterDataContainer>> => {
    const url = 'characters';
    const params = `/${characterId}`;

    return fetchMarvel(url + params)
}

export const getComicsById = async (comicsId: number)
:Promise<IBaseResponseMarvel<ICharacterDataContainer>> => {
    const url = 'comics';
    const params = `/${comicsId}`;

    return fetchMarvel(url + params);
}
