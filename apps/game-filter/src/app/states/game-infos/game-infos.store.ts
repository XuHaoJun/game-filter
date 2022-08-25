import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';

import { createInitState, GameInfo, GameInfosState } from './game-infos.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'game-infos', idKey: 'id' })
export class GameInfosStore extends EntityStore<GameInfosState> {
  constructor() {
    super(createInitState());
    const gameInfos: GameInfo[] = [
      {
        id: 'e7',
        name: 'e7',
        fullName: 'epic seven',
      },
      {
        id: 'poe',
        name: 'poe',
        fullName: 'path of exlie',
      },
      {
        id: 'wf',
        name: 'wf',
        fullName: 'world fliper',
      },
    ];
    this.add(gameInfos);
  }
}
