import { Injectable } from '@angular/core';

import { MainLayoutStore } from './main-layout.store';

@Injectable()
export class MainLayoutService {
  constructor(private mainLayoutStore: MainLayoutStore) {}

  setSelectedGameName(selectedGameName?: string | null) {
    this.mainLayoutStore.update({
      selectedGameName,
    });
  }
}
