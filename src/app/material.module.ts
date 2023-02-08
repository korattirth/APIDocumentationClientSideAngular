import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule, MatTableModule],
  exports: [MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule, MatTableModule],
})
export class MaterialModule {}
