import { Injectable } from '@angular/core';
import { EntityStore, isFunction, StoreConfig } from '@datorama/akita';
import { always } from 'rambda';
import {
  createUIInitState,
  GameObjectsState,
  GameObjectsUIState,
  GameObjectsUIStateMapper
} from './game-objects.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'game-objects', idKey: '_id' })
export class GameObjectsStore extends EntityStore<GameObjectsState> {
  constructor() {
    super({ ui: createUIInitState() });
  }

  updateUI(newState: Partial<GameObjectsUIState> | GameObjectsUIStateMapper) {
    const mapper = isFunction(newState) ? newState : always(newState);
    return this.update(({ ui, ...state }) => ({
      ...state,
      ui: { ...ui, ...mapper(ui) },
    }));
  }

  resetUI() {
    return this.updateUI(createUIInitState());
  }
}
