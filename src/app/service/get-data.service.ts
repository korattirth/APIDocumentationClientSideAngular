import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../util/value';
import { Observable } from 'rxjs';
import { GetMethodData, GetParameter, GetPaths, GetRequestType, Paths } from '../model/paths';
import { GetRequestBody, GetResponse, GetResponseContent, GetResponseDetails } from '../model/responseModel';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  unSubscribejsonData!: Observable<string>;
  subscribejsonData: any;
  paths!: Paths;
  pathList: string[] = [];

  constructor(private _httpClient: HttpClient) { }

  callAPI() {
    this.unSubscribejsonData = this._httpClient.get<string>(`${API.baseUrl}/api/Test?test=${"Testing"}`);
    this.getDataSubscribe();
  }

  getJsonData() {
    return this.unSubscribejsonData
  }

  getDataSubscribe() {
    this.unSubscribejsonData.subscribe({
      next: (res) => (this.subscribejsonData = JSON.parse(res)),
      error: (err) => console.log(err),
      complete: () => {
        //console.log(this.subscribejsonData)
      },
    })
  }

  getData() {
    return this.subscribejsonData
  }

  getPaths() {
    this.paths = new GetPaths(this.getData().paths).allPath;
    return this.paths
  }

  getPathList() {
    return this.pathList = Object.keys(this.getPaths())
  }

  getRequestTypeList(path:string) {
    return Object.keys(new GetRequestType(this.paths[path]).requestType)
  }

  getMethodDetail(path : string,reqType : string) {
    return new GetMethodData(this.paths[path][reqType]).methodData;
  }

  getParameter(path : string,reqType : string) {
    const parameter = new GetMethodData(this.paths[path][reqType]).methodData.parameters;
    return new GetParameter(parameter).parameter
  }

  getResponse(path: string, reqType: string) {
    const response = new GetMethodData(this.paths[path][reqType]).methodData.responses;
    return new GetResponse(response).response
  }
  
  getRequestBody(path: string, reqType: string) {
    const requestBody = new GetMethodData(this.paths[path][reqType]).methodData.requestBody;
    return new GetRequestBody(requestBody).requestBody
  }
  
}
