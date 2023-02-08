import { Component , Output , EventEmitter , OnInit } from '@angular/core';
import { GetDataService } from 'src/app/service/get-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  jsonData: any;

  constructor(private getData: GetDataService) { }
  
  ngOnInit(): void {
    this.getData.getJsonData().subscribe({
      next: res => this.jsonData = JSON.parse(res),
      error: err => console.log(err),
      complete : () => console.log(this.jsonData)
    })
  }
}
