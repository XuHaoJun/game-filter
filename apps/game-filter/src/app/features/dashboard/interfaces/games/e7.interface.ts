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
  buffs: number[];
  debuffs: number[];
  common: number[];
}
