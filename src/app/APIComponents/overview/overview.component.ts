import { Component , OnInit , Input } from '@angular/core';
import { GetDataService } from 'src/app/service/get-data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  jsonData!: any;
  @Input() path: string = '';
  @Input() reqType: string = '';

  methodName: string = '';
  summary : string = '';

  constructor(private getData: GetDataService) { }

  ngOnInit(): void {
    this.getAPIData();
    
  }
  
  private getAPIData() {
    this.getData.getJsonData().subscribe({
      next: (res) => (this.jsonData = JSON.parse(res)),
      error: (err) => console.log(err),
      complete: () => {
        this.showDescrpition();
      },
    });
  }

  private showDescrpition() {
    this.methodName = this.getData.getMethodDetail(this.path, this.reqType).operationId;
    this.summary = this.getData.getMethodDetail(this.path, this.reqType).summary;
  }

}
