import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SubscribeModule } from '@ngneat/subscribe';
import { NgAsModule } from 'ng-as';
import { E7BoolGroupListModule } from '../../components/e7-bool-group-list/e7-bool-group-list.module';

import { E7HeroesTableModule } from '../../components/e7-heroes-table/e7-heroes-table.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomePageComponent } from './pages/dashboard-home-page/dashboard-home-page.component';

@NgModule({
  declarations: [DashboardHomePageComponent],
  imports: [
    CommonModule,
    SubscribeModule,
    HttpClientModule,
    DashboardRoutingModule,
    E7HeroesTableModule,
    E7BoolGroupListModule,
    NgAsModule,
    MatCardModule,
  ],
  providers: [DashboardHomePageComponent],
  exports: [DashboardHomePageComponent],
})
export class DashboardModule {}
