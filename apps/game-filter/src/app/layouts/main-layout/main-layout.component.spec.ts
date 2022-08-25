import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { createRoutingFactory } from '@ngneat/spectator/jest';

import { MainLayoutComponent } from './main-layout.component';
import { MainLayoutModule } from './main-layout.module';

@Component({
  template: `<p>foo</p>`,
})
class EmptyComponent {}

describe('MainLayoutComponent', () => {
  const createComponent = createRoutingFactory({
    component: MainLayoutComponent,
    imports: [MainLayoutModule],
    declarations: [EmptyComponent],
    stubsEnabled: false,
    providers: [],
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

  it('navbar game btn for check selected class', async () => {
    const spectator = createComponent();
    spectator.setInput('gameName', 'e7');
    spectator.setInput('gameInfos', [
      { id: 'e7', name: 'e7', fullName: 'epic seven' },
    ]);
    const gameButtonId = '#navbar-games-e7';
    const gameBtn = spectator.query(gameButtonId);
    expect(gameBtn).toHaveClass('navbar-header-item-selected');
  });

  it('navbar click game btn for check location', async () => {
    const spectator = createComponent();
    spectator.setInput('gameName', 'e7');
    spectator.setInput('gameInfos', [
      { id: 'e7', name: 'e7', fullName: 'epic seven' },
    ]);

    await spectator.fixture.whenStable();
    expect(spectator.inject(Location).path()).toBe('/');

    const gameButtonId = '#navbar-games-e7';
    spectator.click(gameButtonId);
    await spectator.fixture.whenStable();
    expect(spectator.inject(Location).path()).toBe('/games/e7');
  });
});
