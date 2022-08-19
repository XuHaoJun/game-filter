import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface MainLayoutState {
  selectedGameName: string | null;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'main-layout' })
export class MainLayoutStore extends Store<MainLayoutState> {
  constructor() {
    super({
      selectedGameName: null,
    });
  }
}
