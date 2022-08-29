import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import produce from 'immer';
import { Observable, of, share, tap } from 'rxjs';

import {
  E7Buff,
  E7Hero,
  E7HeroesResponse,
  E7SimpleHero
} from '../../../interfaces/e7.interface';
import { GameObjectsUIState } from './game-objects.model';

import { GameObjectsStore } from './game-objects.store';

@Injectable({ providedIn: 'root' })
export class GameObjectsService {
  constructor(
    private gameObjectsStore: GameObjectsStore,
    private http: HttpClient
  ) {}

  setGameName(gameName?: string) {
    this.gameObjectsStore.updateUI({
      gameName,
    });
  }

  resetUIState() {
    this.gameObjectsStore.resetUI();
  }

  setFilter(filter: GameObjectsUIState['filter']) {
    this.gameObjectsStore.updateUI({ filter });
  }

  setFilterBySelections() {
    // this.gameObjectsStore.updateUI({ filter });
  }

  getGameObjects(
    gameName: 'e7',
    category: string
  ): Observable<E7HeroesResponse> {
    switch (gameName) {
      case 'e7': {
        this.gameObjectsStore.setLoading(true);
        return this.http
          .get<E7HeroesResponse>(`/api/games/e7/${category}`)
          .pipe(
            share(),
            tap((heroesRes) => {
              this.gameObjectsStore.add(
                heroesRes.heroes.map((x) =>
                  simpleHeroToHero(x, heroesRes.buffs)
                )
              );
              this.gameObjectsStore.update((state) => {
                return produce(state, (draft) => {
                  draft.e7.roles = heroesRes.roles;
                });
              });
              this.gameObjectsStore.setLoading(false);
            })
          );
      }
      default: {
        return of();
      }
    }
  }

  removeGameObjects() {
    this.gameObjectsStore.remove();
  }
}

function simpleHeroToHero(x: E7SimpleHero, fullBuffs: E7Buff[]): E7Hero {
  const getBuff = (bid: string): E7Buff | undefined =>
    fullBuffs.find((b) => b.id === bid);
  const toBuffs = (bids: string[]): E7Buff[] =>
    bids.map(getBuff).filter((b) => b !== undefined) as E7Buff[];

  const buffs = toBuffs(x.buffs);
  const debuffs = toBuffs(x.debuffs);
  const common = toBuffs(x.common);
  const allBuffs = [...buffs, ...debuffs, ...common];

  const hero = {
    ...x,
    buffs,
    debuffs,
    common,
    allBuffs,
  };
  const buffAddHeroId = (b: E7Buff, h: E7Hero) => {
    b.heroeIds = [...(b.heroeIds || []), h.id];
  };
  allBuffs.forEach((b) => buffAddHeroId(b, hero));
  return hero;
}
