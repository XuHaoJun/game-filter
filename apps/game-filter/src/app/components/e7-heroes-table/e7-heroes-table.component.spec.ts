import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { E7HeroesTableComponent } from './e7-heroes-table.component';

describe('E7HeroesTableComponent', () => {
  let spectator: Spectator<E7HeroesTableComponent>;
  const createComponent = createComponentFactory(E7HeroesTableComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
