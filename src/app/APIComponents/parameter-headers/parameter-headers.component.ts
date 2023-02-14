import { Component, Input, OnInit } from '@angular/core';
import { Parameter } from 'src/app/model/pathsModel';
import { GetDataService } from 'src/app/service/get-data.service';

@Component({
  selector: 'app-parameter-headers',
  templateUrl: './parameter-headers.component.html',
  styleUrls: ['./parameter-headers.component.css'],
})
export class ParameterHeadersComponent implements OnInit {
  @Input() path: string = '';
  @Input() reqType: string = '';
  parameter: Parameter[] = [];
  displayedColumns: string[] = ['name', 'required', 'description'];
  dataSource: Parameter[] = [];

  constructor(private getData: GetDataService) {}

  ngOnInit(): void {
    this.showHeadersAndParameters();
  }

  private showHeadersAndParameters() {
    this.parameter = this.getData.getParameter(this.path, this.reqType);
    if (this.parameter != undefined) {
      this.dataSource = this.parameter;
    }
  }
}
