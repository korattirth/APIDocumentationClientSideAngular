import { Component, OnInit } from '@angular/core';
import { JsonData } from 'src/app/model/mainModel';
import { Paths } from 'src/app/model/pathsModel';
import { GetDataService } from 'src/app/service/get-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  jsonData!: JsonData;
  pathList: string[] = [];
  reqType: string[] = ['get', 'post', 'put', 'delete'];
  paths!: Paths;

  constructor(private getData: GetDataService) {}

  ngOnInit(): void {
    this.getData.callAPI();
   this.getAPIData();
  }

  private getAPIData() {
    this.getData.getJsonData().subscribe({
      next: (res) => (this.jsonData = JSON.parse(res)),
      error: (err) => console.log(err),
      complete: () => {
        this.getPath();
      },
    });
  }

  private getPath() {
    this.paths = this.getData.getPaths()
    this.pathList = Object.keys(this.paths);
  }

  getMethodName(path: string, reqType: string) {
    return this.paths[path][reqType].operationId
  }

  validateReqType(reqType: string, path: string) {
    return this.getData.getRequestTypeList(path).includes(reqType)
  }
}
