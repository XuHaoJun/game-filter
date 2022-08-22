import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SubscribeModule } from '@ngneat/subscribe';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomePageComponent } from './pages/dashboard-home-page/dashboard-home-page.component';

@NgModule({
  declarations: [DashboardHomePageComponent],
  imports: [
    CommonModule,
    SubscribeModule,
    HttpClientModule,
    DashboardRoutingModule,
    MatCardModule,
  ],
  providers: [DashboardHomePageComponent],
  exports: [DashboardHomePageComponent],
})
export class DashboardModule {}
