import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';

import { E7BoolGroupListComponent } from './e7-bool-group-list.component';

@NgModule({
  declarations: [E7BoolGroupListComponent],
  imports: [CommonModule, MatListModule],
  providers: [E7BoolGroupListComponent],
  exports: [E7BoolGroupListComponent],
})
export class E7BoolGroupListModule {}
