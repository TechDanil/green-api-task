interface IHttpRequestModel {
    url: string;
    method: string;
    headers: Record<string, string>;
    body?: any;
}


export { IHttpRequestModel };