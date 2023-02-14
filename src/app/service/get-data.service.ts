import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../util/value';
import { Observable } from 'rxjs';
import {
  GetMethodData,
  GetParameter,
  GetPaths,
  GetRequestType,
  Paths,
} from '../model/pathsModel';
import { GetRequestBody, GetResponse } from '../model/response-requestModel';
import { JsonData } from '../model/mainModel';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  unSubscribejsonData!: Observable<string>;
  subscribejsonData!: JsonData;
  paths!: Paths;
  selectedMethodName: string = '';

  constructor(private _httpClient: HttpClient) {}

  async callAPI() {
    this.unSubscribejsonData = this._httpClient.get<string>(
      `${API.baseUrl}/api/Test?test=${'Testing'}`
    );
    await this.getDataSubscribe(this.unSubscribejsonData);
  }

  getJsonData() {
    return this.unSubscribejsonData;
  }

  async getDataSubscribe(data: Observable<string>) {
    data.subscribe({
      next: (res) => (this.subscribejsonData = JSON.parse(res)),
      error: (err) => console.log(err),
      complete: () => {
      },
    });
  }

  getData() {
    return this.subscribejsonData;
  }

  getPaths() {
    console.log(this.getData())
    this.paths = new GetPaths(this.getData().paths).allPath;
    return this.paths;
  }

  getRequestTypeList(path: string) {
    return Object.keys(new GetRequestType(this.paths[path]).requestType);
  }

  getMethodDetail(path: string, reqType: string) {
    return new GetMethodData(this.paths[path][reqType]).methodData;
  }

  getParameter(path: string, reqType: string) {
    const parameter = new GetMethodData(this.paths[path][reqType]).methodData
      .parameters;
    return new GetParameter(parameter).parameter;
  }

  getResponse(path: string, reqType: string) {
    const response = new GetMethodData(this.paths[path][reqType]).methodData
      .responses;
    return new GetResponse(response).response;
  }

  getRequestBody(path: string, reqType: string) {
    const requestBody = new GetMethodData(this.paths[path][reqType]).methodData
      .requestBody;
    return new GetRequestBody(requestBody).requestBody;
  }
}
