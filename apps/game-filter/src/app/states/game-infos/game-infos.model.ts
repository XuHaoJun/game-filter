import { EntityState } from '@datorama/akita';

export interface GameInfo {
  id: string;
  name: string;
  fullName: string;
  description?: string;
}

export type GameInfosState = EntityState<GameInfo, string>;

export function createInitState(): GameInfosState {
  return {};
}
