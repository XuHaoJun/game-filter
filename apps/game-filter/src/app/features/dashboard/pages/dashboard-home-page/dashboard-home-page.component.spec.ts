import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { DashboardHomePageComponent } from './dashboard-home-page.component';

describe('DashboardHomePageComponent', () => {
  let spectator: Spectator<DashboardHomePageComponent>;
  const createComponent = createComponentFactory(DashboardHomePageComponent);

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should have a success class by default', () => {
    expect(spectator.query('p')).toHaveExactText('home');
  });
});
