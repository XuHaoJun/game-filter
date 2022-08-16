import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomePageComponent } from './pages/dashboard-home-page/dashboard-home-page.component';

@NgModule({
  declarations: [DashboardHomePageComponent],
  imports: [DashboardRoutingModule],
  providers: [],
})
export class DashboardModule {}
