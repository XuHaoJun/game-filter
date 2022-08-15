import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from '../interceptors/api.interceptor';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
