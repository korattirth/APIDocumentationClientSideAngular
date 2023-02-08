import { Component, Input, OnInit } from '@angular/core';
import {
  GetResponseDescription,
  ResponseDescription,
} from 'src/app/model/responseModel';
import { GetDataService } from 'src/app/service/get-data.service';

@Component({
  selector: 'app-request-response',
  templateUrl: './request-response.component.html',
  styleUrls: ['./request-response.component.css'],
})
export class RequestResponseComponent implements OnInit {
  jsonData!: any;
  @Input() path: string = '';
  @Input() reqType: string = '';
  responseObject: ResponseDescription[] = [];
  displayedColumns: string[] = ['code', 'description'];
  dataSource: ResponseDescription[] = [];
  responseExample: string = '';
  requestExample: string = '';

  constructor(private getData: GetDataService) {}

  ngOnInit(): void {
    this.getAPIData();
  }

  private getAPIData() {
    this.getData.getJsonData().subscribe({
      next: (res) => (this.jsonData = JSON.parse(res)),
      error: (err) => console.log(err),
      complete: () => {
        this.showResponseDescrpition();
        this.showRequestExample();
      },
    });
  }

  private showResponseDescrpition() {
    if (this.jsonData.paths[this.path][this.reqType].responses !== undefined) {
      const arr = this.jsonData.paths[this.path][this.reqType].responses;
      const resCode = Object.keys(arr);
      resCode.forEach((code) => {
        // Get response code and description
        this.responseObject.push(
          new GetResponseDescription(code, arr[code].description).resObject
        );
        // Response Example
        if (code.startsWith('2') && arr[code].content) {
          const contentType = Object.keys(arr[code].content);
          let useContentType: string = '';
          contentType.includes('application/json')
            ? (useContentType = 'application/json')
            : (useContentType = contentType[0]);
            this.responseExample = arr[code].content[useContentType].example;
        }
      });
      // Table Data
      this.dataSource = this.responseObject;
    }
  }

  private showRequestExample() {
    if (
      this.jsonData.paths[this.path][this.reqType].requestBody !== undefined
    ) {
      const arr = this.jsonData.paths[this.path][this.reqType].requestBody;
      const contentType = Object.keys(arr.content);
      let useContentType: string = '';
      contentType.includes('application/json')
        ? (useContentType = 'application/json')
        : (useContentType = contentType[0]);
      this.requestExample = arr.content[useContentType].example;
    }
  }
}
