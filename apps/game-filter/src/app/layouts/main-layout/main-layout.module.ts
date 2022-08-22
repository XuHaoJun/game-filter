import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { SubscribeModule } from '@ngneat/subscribe';

import { DashboardModule } from '../../features/dashboard/dashboard.module';
import { MainLayoutComponent } from './main-layout.component';

const matModules = [MatToolbarModule, MatIconModule, MatButtonModule];

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    SubscribeModule,
    RouterModule,
    DashboardModule,
    ...matModules,
  ],
  providers: [MainLayoutComponent],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule {}
