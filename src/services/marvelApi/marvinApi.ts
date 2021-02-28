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
    const keyPublic = 'd3e18b0552017cc1fab3133788553861';
    const keyPrivate = 'b6dc9444b1e5adf925c65d8eae59e9f0d4fd0207';
    const hash = md5(ts + keyPrivate + keyPublic);
    return `ts=${ts}&apikey=${keyPublic}&hash=${hash}`;
}




export const getCharacters = async (searchParams: ISearchParams ):Promise<IBaseResponseMarvel<ICharacterDataContainer>> => {
    const url = 'characters';

    const { limit, offset } = searchParams;
    const params = `?limit=${limit}&offset=${offset}`


    return fetchMarvel(url + params, true);


}