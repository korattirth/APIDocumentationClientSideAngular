import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../util/value';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  jsonData!: Observable<string>;

  constructor(private _httpClient: HttpClient) { }

  callAPI() {
    this.jsonData = this._httpClient.get<string>(`${API.baseUrl}/api/Test?test=${"Testing"}`)
  }

  getJsonData() {
    return this.jsonData
  }
}
