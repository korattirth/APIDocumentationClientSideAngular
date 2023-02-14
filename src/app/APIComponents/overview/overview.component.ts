import { Component , OnInit , Input , Output } from '@angular/core';
import { GetDataService } from 'src/app/service/get-data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  @Input() path: string = '';
  @Input() reqType: string = '';
  @Output() selectedMethodName: string = '';

  methodName: string = '';
  summary : string = '';

  constructor(private getData: GetDataService) { }

  ngOnInit(): void {
    this.showDescrpition();
  }

  private showDescrpition() {
    this.methodName = this.getData.getMethodDetail(this.path, this.reqType).operationId;
    this.summary = this.getData.getMethodDetail(this.path, this.reqType).summary;
  }

}
