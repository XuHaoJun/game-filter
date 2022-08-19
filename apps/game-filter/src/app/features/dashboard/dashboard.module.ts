import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomePageComponent } from './pages/dashboard-home-page/dashboard-home-page.component';

@NgModule({
  declarations: [DashboardHomePageComponent],
  imports: [CommonModule, DashboardRoutingModule, MatCardModule],
  providers: [],
})
export class DashboardModule {}
