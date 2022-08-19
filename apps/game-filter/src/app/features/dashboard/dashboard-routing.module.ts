import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomePageComponent } from './pages/dashboard-home-page/dashboard-home-page.component';

const routes: Routes = [{ path: ':gameName', component: DashboardHomePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
