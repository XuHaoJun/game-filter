import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { NgAsModule } from 'ng-as';

import { E7BoolGroupListComponent } from './e7-bool-group-list.component';

@NgModule({
  declarations: [E7BoolGroupListComponent],
  imports: [CommonModule, NgAsModule, MatListModule, MatBadgeModule],
  providers: [E7BoolGroupListComponent],
  exports: [E7BoolGroupListComponent],
})
export class E7BoolGroupListModule {}
