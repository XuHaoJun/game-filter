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

export interface E7Hero {
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

export interface E7Buff {
  _id: string;
  id: string;
  type: string;
  name: string;
  effect: string;
  assets: {
    icon: string;
  };
  heroeIds?: string[];
}

export interface E7HeroesResponse {
  total: number;
  heroes: E7SimpleHero[];
  buffs: E7Buff[];
}
