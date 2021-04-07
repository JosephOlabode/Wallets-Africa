import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { SendMoneyComponent } from './send-money/send-money.component';
import { RequestMoneyComponent } from './request-money/request-money.component';
import { AirtimeComponent } from './airtime/airtime.component';
import { BillsComponent } from './bills/bills.component';
import { CardComponent } from './card/card.component';
import { ReportsComponent } from './reports/reports.component';
import { DocumentationComponent } from './documentation/documentation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    SendMoneyComponent,
    RequestMoneyComponent,
    AirtimeComponent,
    BillsComponent,
    CardComponent,
    ReportsComponent,
    DocumentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
