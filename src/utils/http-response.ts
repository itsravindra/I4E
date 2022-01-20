export interface HttpResponse<T> extends Response {
    [x: string]: any;
    parsedBody?: T;
  }