import  { HttpResponse } from "./http-response";
import  { http } from "./http";
export async function get<T>(
    path: string,
    args: RequestInit = { method: "get" }
  ): Promise<HttpResponse<T>> {
    return await http<T>(new Request(path, args));
  };
  
  export async function post<T>(
    path: string,
    body: any,
    args: RequestInit = { method: "post", body: JSON.stringify(body) }
  ): Promise<HttpResponse<T>>  {
    return await http<T>(new Request(path, args));
  };
  
  export async function put<T>(
    path: string,
    body: any,
    args: RequestInit = { method: "put", body: JSON.stringify(body) }
  ): Promise<HttpResponse<T>> {
    return await http<T>(new Request(path, args));
  };

  export async function patch<T>(
    path: string,
    body: any,
    args: RequestInit = { method: "patch", body: JSON.stringify(body) }
  ): Promise<HttpResponse<T>> {
    return await http<T>(new Request(path, args));
  };