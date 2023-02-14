import { RequestBody, Response } from "./response-requestModel";

export interface Paths {
  [key: string]: RequestType;
}

export class GetPaths {
  allPath!: Paths;
  constructor(data: Paths) {
    this.allPath = data;
  }
}

export interface RequestType {
  [key: string]: MethodData;
}

export class GetRequestType {
  requestType!: RequestType;
  constructor(data: RequestType) {
    this.requestType = data;
  }
}

export interface MethodData {
  description: string;
  operationId: string;
  parameters: Parameter[];
  requestBody: RequestBody;
  responses: Response;
  summary: string;
  tags: string[];
}

export class GetMethodData {
  methodData!: MethodData;
  constructor(data: MethodData) {
    this.methodData = data;
  }
}

export interface Parameter {
  [key: string]: ParameterDetails;
}

export class GetParameter {
  parameter: Parameter[] = [];
  constructor(data: Parameter[]) {
    this.parameter = data;
  }
}

export interface ParameterDetails {
  description: string;
  in: string;
  name: string;
  schema: ParameterSchema;
}

export class GetParameterDetail{
  parameeterDetail: ParameterDetails;
  constructor(data: ParameterDetails) {
    this.parameeterDetail = data;
  }
}

export interface ParameterSchema {
  nullable: string;
  type: string;
  description: string;
}
