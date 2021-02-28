export interface IRequest {
    endPoint: string;
    method: IMethod;
}

export type IMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface IBaseResponse<TResponse> {
    statusCode: number;
    data: TResponse;
    success: boolean;
}