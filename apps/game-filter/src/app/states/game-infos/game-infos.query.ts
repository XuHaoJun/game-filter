import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';

import { GameInfosState } from './game-infos.model';
import { GameInfosStore } from './game-infos.store';

@Injectable({ providedIn: 'root' })
export class GameInfosQuery extends QueryEntity<GameInfosState> {
  constructor(protected override store: GameInfosStore) {
    super(store);
  }
}
