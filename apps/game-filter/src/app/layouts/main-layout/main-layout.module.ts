import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { MainLayoutComponent } from './main-layout.component';
import { MainLayoutQuery } from './state/main-layout.query';
import { MainLayoutService } from './state/main-layout.service';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule, MatIconModule, MatButtonModule],
  providers: [MainLayoutComponent, MainLayoutService, MainLayoutQuery],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule {}
