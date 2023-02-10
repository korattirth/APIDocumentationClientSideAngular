export interface ResponseDescription {
  code: string;
  description: string;
}

export class GetResponseDescription {
  resObject!: ResponseDescription;
  constructor(desciption: string, code: string) {
    this.resObject = {
      code: code,
      description: desciption,
    };
  }
}

export interface Response {
  [key: string]: ResponseDetails;
}
export interface ResponseDetails {
  content: ResponseContent;
  description: string;
}
export interface ResponseContent{
  [key: string]: ResponseContentDetail;
}
export interface ResponseContentDetail{
  example: string;
  schema: ResponseSchema;  
}
export interface ResponseSchema {
  $ref: string;
}

export class GetResponse {
  response: Response;
  constructor(data: Response) {
    this.response = data;
  }
}

export class GetResponseDetails {
  responseDetail: ResponseDetails;
  constructor(data: ResponseDetails) {
    this.responseDetail = data;
  }
}

export class GetResponseContent{
    responseContent: ResponseContent;
  constructor(data: ResponseContent) {
        this.responseContent = data;
    }
}

export class GetResponseContentDetail{
    responseContentDetail: ResponseContentDetail;
    constructor(data: ResponseContentDetail) {
        this.responseContentDetail = data;
    }
}


export interface RequestBody{
  [key: string]: RequestBodyContent;
}

export interface RequestBodyContent{
  [key: string]: RequestBodyContentDetail;
}

export interface RequestBodyContentDetail{
  example: string;
  schema: any;
}

export interface RequestBodySchema {
  $ref: string;
}

export class GetRequestBody {
  requestBody: RequestBody;
  constructor(data: RequestBody) {
    this.requestBody = data;
  }
}

export class GetRequestBodyContent {
  requestBodyContent: RequestBodyContent;
  constructor(data: RequestBodyContent) {
    this.requestBodyContent = data;
  }
}

export class GetRequestBodyContentDetail{
  requestBodyContentDetail: RequestBodyContentDetail;
  constructor(data: RequestBodyContentDetail) {
      this.requestBodyContentDetail = data;
  }
}

