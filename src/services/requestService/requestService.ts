import { IRequest, IBaseResponse } from './types';








export class RequestService {

    private apiKey: string;


    constructor () {
        this.apiKey = 'd3e18b0552017cc1fab3133788553861';
    }

/*
    private async mountRequest <IRequest> (): IBaseResponse<string> | null {
        const url = `${this.baseUrl}/${endPoint}`;

        switch(method) {
            case 'GET': return this.getJson(url); 
            default: return null;
        }
    }
*/

    public async getJson (endPoint: string) {}

}