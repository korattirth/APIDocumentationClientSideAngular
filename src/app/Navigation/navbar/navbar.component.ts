import { Component , Output , EventEmitter } from '@angular/core';
import { JsonData } from 'src/app/model/mainModel';
import { GetDataService } from 'src/app/service/get-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  jsonData!: JsonData;

  @Output() menu = new EventEmitter<void>();
  selectedMethoName: string = '';

  constructor(private getData: GetDataService) { }

  onClickMenu() {
    this.menu.emit();
  }
}
