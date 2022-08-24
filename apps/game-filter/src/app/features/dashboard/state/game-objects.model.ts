import { EntityState } from '@datorama/akita';

export type GameObject = Record<string, any>;

export interface GameObjectsState extends EntityState<GameObject, string> {
  ui: {
    gameName?: string;
    catagory?: string;
    filter: Record<string, any>;
    tableDisplayColumns: string[];
  };
}

export type GameObjectsUIState = GameObjectsState['ui'];
export type GameObjectsUIStateMapper = (
  state: GameObjectsUIState
) => Partial<GameObjectsUIState>;

export function createUIInitState(): GameObjectsUIState {
  return { filter: {}, tableDisplayColumns: [] };
}

export function createInitState(): GameObjectsState {
  return { ui: createUIInitState() };
}
