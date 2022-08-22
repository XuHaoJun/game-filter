import { Injectable } from '@angular/core';
import {
  EntityState,
  EntityStore,
  isFunction,
  StoreConfig
} from '@datorama/akita';
import { always } from 'rambda';

type GameObject = Record<string, any>;

export interface GameObjectsState extends EntityState<GameObject, number> {
  ui: {
    gameName?: string;
    filter: Record<string, any>;
  };
}

export type GameObjectsUIState = GameObjectsState['ui'];
export type GameObjectsUIStateMapper = (
  state: GameObjectsUIState
) => Partial<GameObjectsUIState>;

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'game-objects', idKey: '_id' })
export class GameObjectsStore extends EntityStore<GameObjectsState> {
  constructor() {
    super({ ui: { filter: {} } });
  }

  updateUI(newState: Partial<GameObjectsUIState> | GameObjectsUIStateMapper) {
    const mapper = isFunction(newState) ? newState : always(newState);
    return this.update(({ ui, ...state }) => ({
      ...state,
      ui: { ...ui, ...mapper(ui) },
    }));
  }
}
