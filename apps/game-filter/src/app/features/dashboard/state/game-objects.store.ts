import { Injectable } from '@angular/core';
import { EntityStore, isFunction, StoreConfig } from '@datorama/akita';
import { always } from 'rambda';

import {
  createInitState,
  createUIInitState,
  GameObjectsState,
  GameObjectsUIState,
  GameObjectsUIStateMapper
} from './game-objects.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'game-objects', idKey: 'id' })
export class GameObjectsStore extends EntityStore<GameObjectsState> {
  constructor() {
    super(createInitState());
  }

  updateUI(newState: Partial<GameObjectsUIState> | GameObjectsUIStateMapper) {
    const mapper = isFunction(newState) ? newState : always(newState);
    return this.update(({ ui, ...state }) => ({
      ...state,
      ui: { ...ui, ...mapper(ui) },
    }));
  }

  resetUI() {
    return this.update(({ ui, ...state }) => {
      return {
        ...state,
        ui: createUIInitState(),
      };
    });
  }
}
