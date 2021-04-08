import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UsersComponent} from './users/users.component';
import {SendMoneyComponent} from './send-money/send-money.component';
import {RequestMoneyComponent} from './request-money/request-money.component';
import {AirtimeComponent} from './airtime/airtime.component';
import {BillsComponent} from './bills/bills.component';
import {CardComponent} from './card/card.component';
import {ReportsComponent} from './reports/reports.component';
import {DocumentationComponent} from './documentation/documentation.component';
import {SettingsComponent} from './settings/settings.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'send-money',
    component: SendMoneyComponent
  },
  {
    path: 'request-money',
    component: RequestMoneyComponent
  },
  {
    path: 'buy-airtime',
    component: AirtimeComponent
  },
  {
    path: 'pay-bills',
    component: BillsComponent
  },
  {
    path: 'card',
    component: CardComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'api-documentation',
    component: DocumentationComponent
  },
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
