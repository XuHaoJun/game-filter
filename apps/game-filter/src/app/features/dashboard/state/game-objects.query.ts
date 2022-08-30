import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import * as R from 'rambda';
import { flatten as _flatten } from 'rambda';
import { combineLatest, distinctUntilChanged, map, Observable } from 'rxjs';
import sift from 'sift';

import {
  ItemAnalytic,
  ItemIdentity,
  TotalItemAnalytic
} from '../../../interfaces/analytics.interface';
import { E7Buff, E7Hero } from '../../../interfaces/e7.interface';
import { GameObjectFilter, GameObjectsState } from './game-objects.model';
import { GameObjectsStore } from './game-objects.store';

@Injectable({ providedIn: 'root' })
export class GameObjectsQuery extends QueryEntity<GameObjectsState> {
  private ui$ = this.select((state) => state.ui).pipe(
    distinctUntilChanged<GameObjectsState['ui']>(R.equals)
  );

  gameName$ = this.ui$.pipe(map((uiState) => uiState.gameName));
  filter$ = this.ui$.pipe(
    map((state) => state.filter),
    distinctUntilChanged<GameObjectFilter>(R.equals)
  );
  filteredGameObjects$ = combineLatest([this.filter$, this.selectAll()]).pipe(
    map(([filter, gameObjects]) => {
      const filters: any[] = [];
      for (const groupName in filter.groups) {
        filters.push({ [groupName]: filter.groups[groupName] });
      }
      const mquery = filters.length > 0 ? { $and: filters } : {};
      const tester = sift(mquery);
      return gameObjects.filter(tester);
    })
  );

  // e7 stuff
  e7$ = this.select((state) => state.e7).pipe(
    distinctUntilChanged<GameObjectsState['e7']>(R.equals)
  );
  e7buffs$ = combineLatest([this.gameName$, this.filteredGameObjects$]).pipe(
    map(([gameName, gameObjs]) => {
      if (gameName !== 'e7') {
        return [];
      } else {
        const heroes = gameObjs as E7Hero[];
        return R.pipe(
          R.map<E7Hero, E7Buff[]>((h: E7Hero) => R.uniq(h.allBuffs)),
          _flatten<E7Buff>,
          R.uniq
        )(heroes);
      }
    })
  );
  e7buffAnalytics$: Observable<ItemAnalytic[]> = combineLatest([
    this.gameName$,
    this.e7buffs$,
    this.filteredGameObjects$,
  ]).pipe(
    map(([gameName, e7buffs, _xs]) => {
      if (gameName !== 'e7') {
        return [];
      } else {
        const xs = _xs as E7Hero[];
        return getE7Analytics(xs, e7buffs, (x, item) =>
          Boolean(x.allBuffs.find((xb) => xb.id === item.id))
        );
      }
    })
  );
  e7roles$ = this.e7$.pipe(map((e7) => e7.roles));
  e7roleAnalytics$: Observable<ItemAnalytic[]> = combineLatest([
    this.gameName$,
    this.e7roles$,
    this.filteredGameObjects$,
  ]).pipe(
    map(([gameName, e7roles, _xs]) => {
      if (gameName !== 'e7') {
        return [];
      } else {
        const xs = _xs as E7Hero[];
        return getE7Analytics(xs, e7roles, (x, item) => x.role === item.id);
      }
    })
  );
  e7elements$ = this.e7$.pipe(map((e7) => e7.elements));
  e7elementsAnalytics$: Observable<ItemAnalytic[]> = combineLatest([
    this.gameName$,
    this.e7elements$,
    this.filteredGameObjects$,
  ]).pipe(
    map(([gameName, e7elemnts, _xs]) => {
      if (gameName !== 'e7') {
        return [];
      } else {
        const xs = _xs as E7Hero[];
        return getE7Analytics(
          xs,
          e7elemnts,
          (x, item) => x.attribute === item.id
        );
      }
    })
  );
  e7rarities$ = this.e7$.pipe(map((e7) => e7.rarities));
  e7raritiesAnalytics$: Observable<ItemAnalytic[]> = combineLatest([
    this.gameName$,
    this.e7rarities$,
    this.filteredGameObjects$,
  ]).pipe(
    map(([gameName, e7rarities, _xs]) => {
      if (gameName !== 'e7') {
        return [];
      } else {
        const xs = _xs as E7Hero[];
        return getE7Analytics(
          xs,
          e7rarities,
          (x, item) => `${x.rarity}` === item.id
        );
      }
    })
  );

  constructor(protected override store: GameObjectsStore) {
    super(store);
  }
}

function getE7Analytics(
  xs: E7Hero[],
  items: ItemIdentity[],
  isHitTester: (x: E7Hero, item: ItemIdentity) => boolean
) {
  const partialAnalytics = items.map((y) => {
    const gameObjectIds = xs.filter((x) => isHitTester(x, y)).map((x) => x.id);
    return {
      itemId: y.id,
      gameObjectIds,
      count: gameObjectIds.length,
    };
  });
  const numItemCount = R.sum(partialAnalytics.map((pa) => pa.count));
  const totalAnalytic: TotalItemAnalytic = {
    numGameObjects: xs.length,
    numItemCount,
  };
  return partialAnalytics.map((pa) => {
    return {
      ...pa,
      usedRate: pa.count / xs.length,
      totalAnalytic,
    };
  });
}
