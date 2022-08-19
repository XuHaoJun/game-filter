import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { MainLayoutState, MainLayoutStore } from './main-layout.store';

@Injectable()
export class MainLayoutQuery extends Query<MainLayoutState> {
  selectedGameName$ = this.select('selectedGameName');

  constructor(protected override store: MainLayoutStore) {
    super(store);
  }
}
