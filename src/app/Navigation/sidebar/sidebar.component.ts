import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/service/get-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  jsonData!: any;
  paths: string[] = [];
  reqType: string[] = ['get','post','put','delete'];
  myDictionary: { [index: string]: any; } = {};

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
    this.paths = Object.keys(this.jsonData.paths);

    const obj1: Record<number, string> = Object.assign({}, this.paths);
    
  }

  validateReqType(reqType: string, path: string) {
    //if (this.jsonData.paths[path][reqType].parameters != undefined) {
      //const obj = Object.fromEntries(this.jsonData.paths[path][reqType]?.parameters)
    //}
    return reqType in this.jsonData.paths[path] ? true : false
  }
}
