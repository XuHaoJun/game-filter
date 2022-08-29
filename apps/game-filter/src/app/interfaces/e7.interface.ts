import { ItemIdentity } from './analytics.interface';

export interface SelfDevotion {
  type: string;
}

export interface Devotion {
  type: string;
}

export interface Assets {
  icon: string;
  image: string;
  thumbnail: string;
}

export interface E7SimpleHero {
  _id: string;
  id: string;
  name: string;
  moonlight: boolean;
  rarity: number;
  attribute: string;
  role: string;
  zodiac: string;
  self_devotion: SelfDevotion;
  devotion: Devotion;
  assets: Assets;
  buffs: string[];
  debuffs: string[];
  common: string[];
}

export interface E7Hero extends ItemIdentity {
  _id: string;
  id: string;
  name: string;
  moonlight: boolean;
  rarity: number;
  attribute: string;
  role: string;
  zodiac: string;
  self_devotion: SelfDevotion;
  devotion: Devotion;
  assets: Assets;
  buffs: E7Buff[];
  debuffs: E7Buff[];
  common: E7Buff[];
  allBuffs: E7Buff[];
}

export interface E7Buff extends ItemIdentity {
  _id: string;
  id: string;
  type: string;
  name: string;
  effect: string;
  assets: {
    icon: string;
  };
  // extra
  heroeIds?: string[];
}

export interface E7Role extends ItemIdentity {
  id: string;
  name: string;
  assets: {
    icon: string;
  };
}

export interface E7HeroesResponse {
  total: number;
  heroes: E7SimpleHero[];
  buffs: E7Buff[];
  roles: E7Role[];
}
