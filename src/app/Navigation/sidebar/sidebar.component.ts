import { Component, OnInit } from '@angular/core';
import { GetRequestType, RequestType } from 'src/app/model/paths';
import { GetDataService } from 'src/app/service/get-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  jsonData!: any;
  pathList: string[] = [];
  reqType: string[] = ['get','post','put','delete'];

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
    this.pathList = this.getData.getPathList();
  }

  validateReqType(reqType: string, path: string) {
    return this.getData.getRequestTypeList(path).includes(reqType)
  }
}
