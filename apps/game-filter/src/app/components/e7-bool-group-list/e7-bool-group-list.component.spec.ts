import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { E7BoolGroupListComponent } from './e7-bool-group-list.component';

describe('E7BoolGroupListComponent', () => {
  let spectator: Spectator<E7BoolGroupListComponent>;
  const createComponent = createComponentFactory(E7BoolGroupListComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
