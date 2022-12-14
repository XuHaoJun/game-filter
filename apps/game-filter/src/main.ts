import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableAkitaProdMode, persistState } from '@datorama/akita';
import { enableMapSet, setAutoFreeze } from 'immer';

import { AppModule } from './app/app.module';
import { loadHttpMock } from './app/mocks/http/http-main-mock';
import { environment } from './environments/environment';

setAutoFreeze(false);
enableMapSet();

persistState({
  include: ['game-infos'],
});

if (environment.production) {
  enableProdMode();
  enableAkitaProdMode();
}

async function bootstrap() {
  if (environment.enableHttpMock) {
    await loadHttpMock();
  }

  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
}

if (document.readyState === 'complete') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}
