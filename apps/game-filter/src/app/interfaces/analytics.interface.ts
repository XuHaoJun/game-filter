export interface TotalItemAnalytic {
  numItemCount: number;
  numGameObjects: number;
}

export interface ItemAnalytic {
  itemId: string;
  gameObjectIds: string[];
  count: number;
  usedRate: number;
  totalAnalytic: TotalItemAnalytic;
}

export interface ItemIdentity {
  id: string;
}
