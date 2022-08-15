import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { detect } from 'detect-browser';
import { Observable } from 'rxjs';
import urlJoin from 'url-join';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith('http') || request.url.startsWith('https')) {
      return next.handle(request);
    } else {
      const baseUrl = this.getBaseURL();
      const url = urlJoin(baseUrl, request.url);
      const apiReq = request.clone({ url });
      return next.handle(apiReq);
    }
  }

  public getBaseURL(): string {
    return getBaseURL();
  }
}

export function getBaseURL(): string {
  // for mono
  const runtime = detect();
  if (!runtime) {
    throw new Error('no runtime detect');
  } else {
    switch (runtime.type) {
      case 'browser': {
        return window?.location?.origin;
      }
      case 'node':
      default: {
        const port =
          process?.env?.['NODE_ENV'] === 'development'
            ? process?.env?.['PORT'] || 4200
            : process?.env?.['PORT'] || 80;
        const _defaultOriginURL = `http://localhost:${port}`;
        const defaultOriginURL =
          process?.env?.['API_PROXY'] || _defaultOriginURL;
        return defaultOriginURL;
      }
    }
  }
}
