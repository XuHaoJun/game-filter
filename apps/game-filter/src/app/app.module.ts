import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooComponent } from './features/foo/foo/foo.component';
import { HomeComponent } from './home.component';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { MainLayoutModule } from './layouts/main-layout/main-layout.module';
import { RatingComponent } from './features/foo/rating/rating.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, FooComponent, RatingComponent],
  imports: [
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TransferHttpCacheModule,
    BrowserAnimationsModule,
    MainLayoutModule,
    AppRoutingModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
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
export class AppModule {}
