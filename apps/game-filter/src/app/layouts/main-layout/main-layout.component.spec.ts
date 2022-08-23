import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { createRoutingFactory, mockProvider } from '@ngneat/spectator/jest';
import { of } from 'rxjs';
import { GameObjectsQuery } from '../../features/dashboard/state/game-objects.query';

import { MainLayoutComponent } from './main-layout.component';
import { MainLayoutModule } from './main-layout.module';

@Component({})
class EmptyComponent {}

describe('MainLayoutComponent', () => {
  const createComponent = createRoutingFactory({
    component: MainLayoutComponent,
    imports: [MainLayoutModule],
    stubsEnabled: false,
    providers: [
      mockProvider(GameObjectsQuery, {
        gameName$: of('e7'),
        selectAll: of([]),
      }),
    ],
    routes: [
      {
        path: 'games/:gameName',
        component: EmptyComponent,
      },
    ],
  });

  it('should create', () => {
    const spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });

  it('navbar click game btn for check selected class and location', async () => {
    const spectator = createComponent();

    await spectator.fixture.whenStable();
    expect(spectator.inject(Location).path()).toBe('/');

    const gameButtonId = '#navbar-games-e7';
    spectator.click(gameButtonId);
    await spectator.fixture.whenStable();
    expect(spectator.inject(Location).path()).toBe('/games/e7');

    const gameBtn = spectator.query(gameButtonId);
    expect(gameBtn).toHaveClass('navbar-header-item-selected');
  });
});
