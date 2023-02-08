import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SidebarComponent } from './Navigation/sidebar/sidebar.component';
import { NavbarComponent } from './Navigation/navbar/navbar.component';
import { GetDataService } from './service/get-data.service';
import { HttpClientModule} from '@angular/common/http';
import { OverviewComponent } from './APIComponents/overview/overview.component';
import { ParameterHeadersComponent } from './APIComponents/parameter-headers/parameter-headers.component';
import { RequestResponseComponent } from './APIComponents/request-response/request-response.component'

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    OverviewComponent,
    ParameterHeadersComponent,
    RequestResponseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
