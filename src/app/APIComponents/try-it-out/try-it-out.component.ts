import { Component, Input, OnInit } from '@angular/core';
import { RequestBody } from 'src/app/model/response-requestModel';
import { GetDataService } from 'src/app/service/get-data.service';
import { requestBodyExample } from 'src/app/util/helper';
import { API } from '../../util/value';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { GetParameterDetail, Parameter } from 'src/app/model/pathsModel';

@Component({
  selector: 'app-try-it-out',
  templateUrl: './try-it-out.component.html',
  styleUrls: ['./try-it-out.component.css'],
})
export class TryItOutComponent implements OnInit {
  @Input() path: string = '';
  @Input() reqType: string = '';
  baseAPI: string = API.baseUrl;
  requestBody!: RequestBody;
  requestExample: string = '';
  tryItOutForm!: FormGroup;
  parameterFrom!: FormGroup;
  error: string = '';
  response: any;
  parameter: any[] = [];

  constructor(
    private getData: GetDataService,
    private _httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.formInitialize();
    this.showRequestExample();
    this.setVal();
    this.showHeadersAndParameters();
    if (this.parameter != undefined) {
      this.parameterFrom = new FormGroup(this.parameterFormInitilize());
    }
  }

  onSubmit() {
    this.response = null;
    this.error = '';
    const value = this.tryItOutForm.value;
    const res = this._httpClient.post(
      `${this.baseAPI}${this.path}`,
      JSON.parse(value.reqExample)
    );
    res.subscribe({
      next: (res) => (this.response = res),
      error: (err) => {
        this.error = err.error;
      },
      complete: () => {
        console.log(this.response);
      },
    });
  }

  onParameterSubmit() {
    this.response = null;
    this.error = '';
    this._httpClient
      .get(`${this.baseAPI}${this.path}`, { params: this.parameterFrom.value })
      .subscribe({
        next: (res) => this.response = res,
        error: err => this.error = err,
        complete : () => console.log(this.error)
      });
  }

  private showRequestExample() {
    this.requestBody = this.getData.getRequestBody(this.path, this.reqType);
    if (this.requestBody !== undefined) {
      this.requestExample = requestBodyExample(this.requestBody);
    }
  }

  private showHeadersAndParameters() {
    this.parameter = this.getData.getParameter(this.path, this.reqType);
  }

  private parameterFormInitilize() {
    const formGroupFields: any = {};
    this.parameter.map((para) => {
      const paraDetail = new GetParameterDetail(para).parameeterDetail;
      formGroupFields[paraDetail.name] = paraDetail.schema.nullable
        ? new FormControl('', Validators.required)
        : new FormControl('');
    });
    return formGroupFields;
  }

  private formInitialize() {
    this.tryItOutForm = new FormGroup({
      reqExample: new FormControl('', [Validators.required]),
    });
  }

  private setVal() {
    this.tryItOutForm.patchValue({
      reqExample: JSON.stringify(this.requestExample),
    });
  }
}
