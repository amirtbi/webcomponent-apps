declare class ApiClass {
  get(url: string, params?: any): Promise<import("axios").AxiosResponse<any, any>>;
  post(url: string, payload: any, config: any): Promise<import("axios").AxiosResponse<any, any>>;
}
export default ApiClass;
