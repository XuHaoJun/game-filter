import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { NgAsModule } from 'ng-as';

import { E7HeroesTableComponent } from './e7-heroes-table.component';

@NgModule({
  declarations: [E7HeroesTableComponent],
  imports: [CommonModule, NgAsModule, MatTableModule, MatListModule, MatCardModule],
  providers: [E7HeroesTableComponent],
  exports: [E7HeroesTableComponent],
})
export class E7HeroesTableModule {}
