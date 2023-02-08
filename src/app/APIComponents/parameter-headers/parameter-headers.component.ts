import { Component, Input, OnInit } from '@angular/core';
import { GetParameter, Parameter } from 'src/app/model/parameterModel';
import { GetDataService } from 'src/app/service/get-data.service';

@Component({
  selector: 'app-parameter-headers',
  templateUrl: './parameter-headers.component.html',
  styleUrls: ['./parameter-headers.component.css']
})
  
export class ParameterHeadersComponent implements OnInit {

  jsonData!: any;
  @Input() path: string = '';
  @Input() reqType: string = '';
  parameter: Parameter[] = [];
  displayedColumns : string[] = ['name', 'required', 'description'];
  dataSource : Parameter[] = [];

  constructor(private getData: GetDataService) { }
  
  ngOnInit(): void {
    this.getAPIData();
  }

  private getAPIData() {
    this.getData.getJsonData().subscribe({
      next: (res) => (this.jsonData = JSON.parse(res)),
      error: (err) => console.log(err),
      complete: () => {
        this.showHeadersAndParameters()
      },
    });
  }

  private showHeadersAndParameters() {
    if (this.jsonData.paths[this.path][this.reqType].parameters != undefined) {
      const arr = this.jsonData.paths[this.path][this.reqType].parameters;

      arr.forEach((res: Parameter) => {
        this.parameter.push(new GetParameter(res).parameter);
      })
      this.dataSource = this.parameter;
    }
  }

}
