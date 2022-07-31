import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReportComponent } from './reports/add-report/add-report.component';
import { AliasComponent } from './alias/alias.component';
import { ConfigComponent } from './config/config.component';
import { DeactivateReportComponent } from './deactivate-report/deactivate-report.component';
import { DeleteLiveReportsComponent } from './delete-live-reports/delete-live-reports.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: '', component:LoginComponent },
  { path: 'home', component: HomeComponent },


  { path: 'alias', component: AliasComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'deleteLiveReports', component: DeleteLiveReportsComponent },
  {
    path: 'reports',
    component: ReportsComponent,
    children: [
      {
        path: 'add-report',
        component: AddReportComponent
      },
      {
        path: 'deactivate-report',
        component: DeactivateReportComponent
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LoginComponent, HomeComponent, AliasComponent, ConfigComponent, 
  LogoutComponent,DeleteLiveReportsComponent,AddReportComponent,DeactivateReportComponent,
  ReportsComponent
]
