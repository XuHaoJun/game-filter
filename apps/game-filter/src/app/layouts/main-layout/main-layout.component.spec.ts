import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { MainLayoutComponent } from './main-layout.component';

describe('MainLayoutComponent', () => {
  let spectator: Spectator<MainLayoutComponent>;
  const createComponent = createComponentFactory(MainLayoutComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
