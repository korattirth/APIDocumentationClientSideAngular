import { Component, Input, OnInit } from '@angular/core';
//import { Response } from 'src/app/model/paths';
import {
  GetResponseContent,
  GetResponseDescription,
  GetResponseDetails,
  ResponseDescription,
  Response,
  ResponseContent,
  RequestBody,
  GetRequestBodyContent,
  GetRequestBodyContentDetail,
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
  response!: Response;
  requestBody!: RequestBody;

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
    this.response = this.getData.getResponse(this.path, this.reqType);
    if (this.response !== undefined) {
      const resCode = Object.keys(this.response);
      resCode.forEach((code: string) => {
        const responseDetail = new GetResponseDetails(this.response[code])
          .responseDetail;
        // Get response code and description
        this.responseObject.push(
          new GetResponseDescription(responseDetail.description, code).resObject
        );
        const responseContent = new GetResponseContent(responseDetail.content)
          .responseContent;
        if (responseContent != undefined) {
          this.showResponseExample(code, responseContent);
        }
      });
      // Table Data
      this.dataSource = this.responseObject;
    }
  }

  private showResponseExample(code: string, responseContent: ResponseContent) {
    // Response Example
    if (code.startsWith('2') && responseContent) {
      const contentType = Object.keys(responseContent);
      let useContentType: string = '';
      contentType.includes('application/json')
        ? (useContentType = 'application/json')
        : (useContentType = contentType[0]);
      this.responseExample = responseContent[useContentType].example;
    }
  }

  private showRequestExample() {
    this.requestBody = this.getData.getRequestBody(this.path, this.reqType);
    if (this.requestBody !== undefined) {
      const requestBodyContent = new GetRequestBodyContent(this.requestBody['content']).requestBodyContent;
      const contentType = Object.keys(requestBodyContent);
      let useContentType: string = '';
      contentType.includes('application/json')
      ? (useContentType = 'application/json')
        : (useContentType = contentType[0]);
      const bodyContentDetail = new GetRequestBodyContentDetail(requestBodyContent[useContentType]).requestBodyContentDetail;
      this.requestExample = bodyContentDetail.example
    }
  }
}
