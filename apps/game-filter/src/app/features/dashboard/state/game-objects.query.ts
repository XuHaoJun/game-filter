import { Injectable } from '@angular/core';
import { HashMap, QueryEntity } from '@datorama/akita';
import {
  flatten as _flatten,
  map as _map,
  pipe as _pipe,
  uniq as _uniq,
  values as _values
} from 'rambda';
import { map } from 'rxjs';

import { E7Buff, E7Hero } from '../../../interfaces/e7.interface';
import { GameObjectsState } from './game-objects.model';
import { GameObjectsStore } from './game-objects.store';

@Injectable({ providedIn: 'root' })
export class GameObjectsQuery extends QueryEntity<GameObjectsState> {
  gameName$ = this.select((x) => x.ui.gameName);

  e7buffs$ = this.select().pipe(
    map<GameObjectsState, E7Buff[]>((x) => {
      if (x.ui.gameName !== 'e7') {
        return [];
      } else {
        const heroes = (x.entities || {}) as HashMap<E7Hero>;
        return _pipe(
          _values,
          _map<E7Hero, E7Buff[]>((h: E7Hero) => h.allBuffs),
          _flatten<E7Buff>,
          _uniq
        )(heroes);
      }
    })
  );

  e7buffsAnalytics$ = this.e7buffs$;

  constructor(protected override store: GameObjectsStore) {
    super(store);
  }
}
