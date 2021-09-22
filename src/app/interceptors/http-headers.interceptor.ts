import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': `${env.API_KEY}`,
        'x-rapidapi-host': `${env.API_HOST}`,
      },
      setParams: {
        key: 'e40e743af2c94b0c916a8aa618fb4473',
      },
    });
    return next.handle(req);
  }
}
